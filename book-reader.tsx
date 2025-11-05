import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const BookReader = () => {
    const [pdfDoc, setPdfDoc] = useState(null);
    const [error, setError] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('Initializing Reader...');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const bookRef = useRef(null);
    const pageFlipRef = useRef(null);

    // Load PDF
    useEffect(() => {
        setLoadingMessage('Loading PDF document...');
        const urlParams = new URLSearchParams(window.location.search);
        const pdfUrlParam = urlParams.get('pdf');

        if (!pdfUrlParam) {
            setError('No PDF URL provided.');
            return;
        }
        
        // Google Drive files require a CORS proxy to be accessed by PDF.js in the browser.
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const finalUrl = `${proxyUrl}${encodeURIComponent(pdfUrlParam)}`;

        const loadingTask = (window as any).pdfjsLib.getDocument(finalUrl);
        loadingTask.promise.then(
            (doc) => {
                setPdfDoc(doc);
                setTotalPages(doc.numPages);
            },
            (reason) => {
                console.error('Error during PDF loading:', reason);
                setError('Failed to load PDF. The file may not be publicly accessible or the link is invalid.');
                setLoadingMessage('');
            }
        );
    }, []);

    // Render PDF to book
    useEffect(() => {
        if (!pdfDoc || !bookRef.current) return;

        const bookElement = bookRef.current;
        const pageFlip = new (window as any).St.PageFlip(bookElement, {
            width: 450,
            height: 600,
            size: 'stretch',
            showCover: true,
            usePortrait: true,
            drawShadow: true,
            maxShadowOpacity: 0.2,
        });
        pageFlipRef.current = pageFlip;

        pageFlip.on('flip', (e) => {
            setCurrentPage(e.data);
        });

        const renderAllPages = async () => {
            for (let i = 1; i <= pdfDoc.numPages; i++) {
                setLoadingMessage(`Rendering page ${i} of ${pdfDoc.numPages}...`);
                const page = await pdfDoc.getPage(i);
                
                // Use a consistent scale factor for all pages
                const viewport = page.getViewport({ scale: 2 });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: context, viewport: viewport }).promise;
                
                const pageElement = document.createElement('div');
                pageElement.className = 'page';
                pageElement.appendChild(canvas);
                
                // The library needs a collection of nodes to load from
                const tempContainer = document.createElement('div');
                tempContainer.appendChild(pageElement);
                pageFlip.loadFromHTML(tempContainer.childNodes);
            }
            setLoadingMessage('');
        };

        renderAllPages();

        return () => {
            if (pageFlipRef.current) {
                pageFlipRef.current.destroy();
                pageFlipRef.current = null;
            }
        }
    }, [pdfDoc]);

    const handlePrev = () => pageFlipRef.current?.flipPrev();
    const handleNext = () => pageFlipRef.current?.flipNext();

    if (error) {
        return <div className="text-center text-red-400 p-8 bg-black/50 rounded-lg">{error}</div>;
    }

    const showLoader = !!loadingMessage;
    const showBook = !showLoader && pdfDoc;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {showLoader && (
                <div className="flex flex-col items-center gap-4">
                    <div className="loader"></div>
                    <p>{loadingMessage}</p>
                </div>
            )}
            
            <div ref={bookRef} className="page-flip-container" style={{ visibility: showBook ? 'visible' : 'hidden' }}>
                {/* PageFlip library will populate this element */}
            </div>

            {showBook && (
                <div className="controls">
                    <button onClick={handlePrev} disabled={currentPage === 0}>Previous</button>
                    <span className="page-number">{currentPage} of {totalPages}</span>
                    <button onClick={handleNext} disabled={currentPage >= totalPages - 1}>Next</button>
                </div>
            )}
        </div>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<BookReader />);
}

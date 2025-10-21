import React, { useState, useEffect } from 'react';

interface MiniPlayerProps {
    videoId: string;
    videoNumber: number;
    onClose: () => void;
    onMaximize: () => void;
}

const MiniPlayer: React.FC<MiniPlayerProps> = ({ videoId, videoNumber, onClose, onMaximize }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [origin, setOrigin] = useState<string | null>(null);

    useEffect(() => {
        // Set origin on the client side to avoid SSR issues and ensure window is defined.
        setOrigin(window.location.origin);
    }, []);

    const videoSrc = origin
        ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&controls=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(origin)}`
        : '';

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // Match animation duration
    };

    return (
        <div
            className="fixed bottom-4 right-4 z-40 w-80 max-w-[80vw] rounded-lg shadow-2xl overflow-hidden glass-card"
            style={{ animation: isClosing ? 'slide-out-br 0.3s ease-in forwards' : 'slide-in-br 0.3s ease-out forwards' }}
            role="dialog"
            aria-label="Mini video player"
        >
            <div className="bg-brand-maroon/80 dark:bg-black/50 text-white dark:text-brand-gold px-3 py-1 flex justify-between items-center">
                <p className="text-sm font-semibold truncate">Playing: Video #{videoNumber}</p>
                <div className="flex items-center space-x-1">
                    <button
                        onClick={onMaximize}
                        className="p-1 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Maximize video player"
                        title="Maximize"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4" />
                        </svg>
                    </button>
                    <button
                        onClick={handleClose}
                        className="p-1 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Close mini player"
                        title="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
               {origin ? (
                    <iframe
                        className="w-full h-full"
                        src={videoSrc}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
               ) : (
                    <div className="w-8 h-8 border-2 border-dashed rounded-full animate-spin border-brand-gold"></div>
               )}
            </div>
        </div>
    );
};

export default MiniPlayer;
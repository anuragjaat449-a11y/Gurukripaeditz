

import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GALLERY_IMAGES, TIMELINE_EVENTS, DARSHAN_SINGH_TIMELINE_EVENTS, GalleryImage, Video } from '../constants';
import ImageModal from './ImageModal';
import VideoPlayerModal from './VideoPlayerModal';

const PhotoGallery: React.FC = () => {
    const { t, language } = useLanguage();
    const [modalIndex, setModalIndex] = useState<number | null>(null);
    const [isKirpalVideoModalOpen, setIsKirpalVideoModalOpen] = useState(false);
    const [isDarshanVideoModalOpen, setIsDarshanVideoModalOpen] = useState(false);
    const darshanSectionRef = useRef<HTMLDivElement>(null);

    const kirpalTimelineImages = TIMELINE_EVENTS.map(event => GALLERY_IMAGES.find(img => img.id === event.imageId)).filter(Boolean) as GalleryImage[];
    const darshanTimelineImages = DARSHAN_SINGH_TIMELINE_EVENTS.map(event => GALLERY_IMAGES.find(img => img.id === event.imageId)).filter(Boolean) as GalleryImage[];
    const allTimelineImages = [...kirpalTimelineImages, ...darshanTimelineImages];

    const kirpalGalleryVideo: Video = {
        id: 'sbQAcW92h7c',
        type: 'youtube',
    };
    
    const darshanGalleryVideo: Video = {
        id: 'tcE9MgpWtqk',
        type: 'youtube',
    };

    const openModal = (imageId: string) => {
        const index = allTimelineImages.findIndex(img => img.id === imageId);
        if (index !== -1) {
            setModalIndex(index);
        }
    };

    const closeModal = () => {
        setModalIndex(null);
    };

    const nextImage = () => {
        if (modalIndex !== null) {
            setModalIndex((modalIndex + 1) % allTimelineImages.length);
        }
    };

    const prevImage = () => {
        if (modalIndex !== null) {
            setModalIndex((modalIndex - 1 + allTimelineImages.length) % allTimelineImages.length);
        }
    };
    
    const scrollToDarshanSection = () => {
        darshanSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const renderTimeline = (events: typeof TIMELINE_EVENTS, images: GalleryImage[]) => (
        <div className="max-w-4xl mx-auto px-4">
            <div className="relative">
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-brand-maroon/20 dark:bg-brand-gold/20"></div>
                {events.map((event, index) => {
                    const image = images.find(img => img.id === event.imageId);
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={event.year + index} className="mb-12 md:mb-0 md:relative">
                            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-maroon dark:bg-brand-gold rounded-full border-4 border-brand-cream dark:border-gray-900 z-10"></div>
                            <div className={`md:flex ${isLeft ? 'md:flex-row-reverse' : ''} md:items-center`}>
                                <div className="md:w-1/2"></div>
                                <div className="md:w-1/2 md:px-8">
                                    <div className="glass-card p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                                        {image && (
                                            <button onClick={() => openModal(image.id)} className="block w-full rounded-md overflow-hidden mb-4 group/img">
                                                <img 
                                                    src={image.thumbnailUrl} 
                                                    alt={language === 'hi' ? image.altHi : image.altEn} 
                                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover/img:scale-105" 
                                                />
                                            </button>
                                        )}
                                        <div className={`p-2 text-left ${isLeft ? 'md:text-right' : ''}`}>
                                            <p className="text-2xl font-bold font-serif-decorative text-brand-maroon dark:text-brand-gold">{event.year}</p>
                                            <p className="mt-2 text-xl font-semibold">{language === 'hi' ? event.titleHi : event.titleEn}</p>
                                            <p className="mt-2 text-black/70 dark:text-white/70">{language === 'hi' ? event.descriptionHi : event.descriptionEn}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block h-12"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-4xl font-serif-decorative text-brand-maroon dark:text-brand-gold">{t.kirpalSinghTitle}</h2>
                <p className="mt-2 text-lg text-black/70 dark:text-white/70">{t.photoGallerySubheading}</p>
                <p className="mt-4 max-w-3xl mx-auto text-black/80 dark:text-white/80">{t.kirpalSinghP1}</p>
            </div>

            <div className="text-center my-8 animate-[fade-in-up_0.5s_ease-out_0.2s]" style={{ animationFillMode: 'backwards' }}>
                <button
                    onClick={scrollToDarshanSection}
                    className="btn-premium-secondary py-3 px-8 rounded-full inline-flex items-center gap-3 transition-transform hover:scale-105 group"
                    aria-label={t.jumpToDarshanSection}
                >
                    <span className="font-semibold">{t.jumpToDarshanSection}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-y-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            
            <div className="max-w-md mx-auto my-12 animate-[fade-in-up_0.5s_ease-out]">
                <div className="glass-card p-6 rounded-lg text-center">
                    <h3 className="font-serif text-2xl text-brand-maroon dark:text-brand-gold">
                        {t.photoGalleryPreview}
                    </h3>
                    <p className="mt-2 text-black/70 dark:text-white/70">
                        {t.photoGallerySubheading}
                    </p>
                    <button
                        onClick={() => setIsKirpalVideoModalOpen(true)}
                        className="mt-6 inline-flex items-center justify-center py-2 px-6 rounded-md text-sm font-bold btn-premium"
                        aria-label={t.watchVideoPreviewAria}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>{t.watchVideoPreview}</span>
                    </button>
                </div>
            </div>

            {renderTimeline(TIMELINE_EVENTS, kirpalTimelineImages)}

            <hr className="my-16 border-t-2 border-dashed border-brand-maroon/20 dark:border-brand-gold/20 w-1/2 mx-auto" />

            <div ref={darshanSectionRef} className="text-center" style={{ scrollMarginTop: '120px' }}>
                <h2 className="text-4xl font-serif-decorative text-brand-maroon dark:text-brand-gold">{t.darshanSinghTitle}</h2>
                <p className="mt-2 text-lg text-black/70 dark:text-white/70">{t.darshanSinghSubheading}</p>
                <p className="mt-4 max-w-3xl mx-auto text-black/80 dark:text-white/80">{t.darshanSinghP1}</p>
            </div>

            <div className="max-w-md mx-auto my-12 animate-[fade-in-up_0.5s_ease-out]">
                <div className="glass-card p-6 rounded-lg text-center">
                    <h3 className="font-serif text-2xl text-brand-maroon dark:text-brand-gold">
                        {t.watchVideoPreview}
                    </h3>
                    <p className="mt-2 text-black/70 dark:text-white/70">
                        {t.darshanSinghSubheading}
                    </p>
                    <button
                        onClick={() => setIsDarshanVideoModalOpen(true)}
                        className="mt-6 inline-flex items-center justify-center py-2 px-6 rounded-md text-sm font-bold btn-premium"
                        aria-label={t.darshanVideoPreviewAria}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>{t.watchVideoPreview}</span>
                    </button>
                </div>
            </div>

            {renderTimeline(DARSHAN_SINGH_TIMELINE_EVENTS, darshanTimelineImages)}


            {modalIndex !== null && (
                <ImageModal
                    images={allTimelineImages}
                    currentIndex={modalIndex}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}

            {isKirpalVideoModalOpen && (
                <VideoPlayerModal
                    isOpen={isKirpalVideoModalOpen}
                    onClose={() => setIsKirpalVideoModalOpen(false)}
                    video={kirpalGalleryVideo}
                    onNext={() => {}}
                    onPrev={() => {}}
                    isShort={false}
                />
            )}
            
            {isDarshanVideoModalOpen && (
                <VideoPlayerModal
                    isOpen={isDarshanVideoModalOpen}
                    onClose={() => setIsDarshanVideoModalOpen(false)}
                    video={darshanGalleryVideo}
                    onNext={() => {}}
                    onPrev={() => {}}
                    isShort={false}
                />
            )}
        </div>
    );
};

export default PhotoGallery;
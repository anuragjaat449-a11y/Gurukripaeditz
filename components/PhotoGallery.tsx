

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GALLERY_IMAGES, TIMELINE_EVENTS, GalleryImage } from '../constants';
import ImageModal from './ImageModal';

const PhotoGallery: React.FC = () => {
    const { t, language } = useLanguage();
    const [modalIndex, setModalIndex] = useState<number | null>(null);

    const timelineImages = TIMELINE_EVENTS.map(event => GALLERY_IMAGES.find(img => img.id === event.imageId)).filter(Boolean) as GalleryImage[];

    const openModal = (imageId: string) => {
        const index = timelineImages.findIndex(img => img.id === imageId);
        if (index !== -1) {
            setModalIndex(index);
        }
    };

    // Fix: Added modal control functions and JSX return to complete the component.
    const closeModal = () => {
        setModalIndex(null);
    };

    const nextImage = () => {
        if (modalIndex !== null) {
            setModalIndex((modalIndex + 1) % timelineImages.length);
        }
    };

    const prevImage = () => {
        if (modalIndex !== null) {
            setModalIndex((modalIndex - 1 + timelineImages.length) % timelineImages.length);
        }
    };

    return (
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-4xl font-serif-decorative text-brand-maroon dark:text-brand-gold">{t.kirpalSinghTitle}</h2>
                <p className="mt-2 text-lg text-black/70 dark:text-white/70">{t.photoGallerySubheading}</p>
                <p className="mt-4 max-w-3xl mx-auto text-black/80 dark:text-white/80">{t.kirpalSinghP1}</p>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-brand-maroon/20 dark:bg-brand-gold/20 -translate-x-1/2" aria-hidden="true"></div>
                
                <div className="space-y-16">
                    {TIMELINE_EVENTS.map((event, index) => {
                        const image = timelineImages.find(img => img.id === event.imageId);
                        const isLeft = index % 2 === 0;

                        const textBlock = (
                            <div className={`glass-card p-6 max-w-md ${isLeft ? 'text-right' : 'text-left'}`}>
                                <p className="text-2xl font-bold font-serif-decorative text-brand-maroon dark:text-brand-gold">{event.year}</p>
                                <p className="mt-2 text-xl font-semibold">{language === 'hi' ? event.titleHi : event.titleEn}</p>
                                <p className="mt-2 text-black/70 dark:text-white/70">{language === 'hi' ? event.descriptionHi : event.descriptionEn}</p>
                            </div>
                        );

                        const imageBlock = (
                            image && (
                                <button onClick={() => openModal(image.id)} className="block max-w-md rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                                    <img src={image.thumbnailUrl} alt={language === 'hi' ? image.altHi : image.altEn} className="w-full h-auto object-cover" />
                                </button>
                            )
                        );
                        
                        return (
                            <div key={event.year} className="relative">
                                <div className="flex items-center">
                                    <div className="w-1/2 px-8 flex justify-end">
                                        {isLeft ? textBlock : imageBlock}
                                    </div>
                                    <div className="w-1/2 px-8 flex justify-start">
                                        {isLeft ? imageBlock : textBlock}
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-maroon dark:bg-brand-gold rounded-full border-4 border-brand-cream dark:border-black z-10"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {modalIndex !== null && (
                <ImageModal
                    images={timelineImages}
                    currentIndex={modalIndex}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </div>
    );
};

export default PhotoGallery;

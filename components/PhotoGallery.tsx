

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
    const closeModal = () => setModalIndex(null);

    const handleNext = () => {
        if (modalIndex !== null) {
            setModalIndex((modalIndex + 1) % timelineImages.length);
        }
    };
    
    const handlePrev = () => {
        if (modalIndex !== null) {
            setModalIndex((modalIndex - 1 + timelineImages.length) % timelineImages.length);
        }
    };

    return (
        <section>
            <div className="max-w-4xl mx-auto mb-12 text-center glass-card p-6 md:p-8">
                <h2 className="text-4xl font-serif-decorative text-brand-maroon dark:text-brand-gold">{t.kirpalSinghTitle}</h2>
                <p className="mt-2 text-lg text-black/80 dark:text-white/80">{t.photoGallerySubheading}</p>
                <div className="mt-6 text-left space-y-4 text-black/80 dark:text-white/80 max-w-3xl mx-auto font-sans">
                    <p>{t.kirpalSinghP1}</p>
                </div>
            </div>

            <div className="relative container mx-auto px-4">
                <div className="absolute left-4 md:left-1/2 w-1 h-full bg-brand-maroon/20 dark:bg-brand-gold/20 -translate-x-1/2" aria-hidden="true"></div>
                
                <div className="relative">
                    {TIMELINE_EVENTS.map((event, index) => {
                        const image = GALLERY_IMAGES.find(img => img.id === event.imageId);
                        if (!image) return null;

                        const title = language === 'hi' ? event.titleHi : event.titleEn;
                        const description = language === 'hi' ? event.descriptionHi : event.descriptionEn;
                        const altText = language === 'hi' ? image.altHi : image.altEn;

                        const isLeft = index % 2 === 0;

                        const content = (
                            <div className="w-full md:w-5/12">
                                <div className="glass-card p-6 rounded-lg w-full">
                                    <p className="text-3xl font-serif-decorative text-brand-maroon dark:text-brand-gold mb-2">{event.year}</p>
                                    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                                    
                                    <div className="my-4 card-container group/image">
                                        <div 
                                            onClick={() => openModal(image.id)}
                                            className="glass-card p-1 rounded-lg shadow-xl cursor-pointer overflow-hidden"
                                        >
                                            <img 
                                                src={image.thumbnailUrl} 
                                                alt={altText}
                                                className="rounded-md w-full object-cover aspect-[16/10] group-hover/image:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-base text-black/80 dark:text-white/80 leading-relaxed">{description}</p>
                                </div>
                            </div>
                        );

                        return (
                            <div key={event.year} className="mb-12 flex justify-center md:justify-between md:flex-row items-center w-full">
                                {isLeft ? (
                                    <>
                                        {content}
                                        <div className="w-2/12 hidden md:flex justify-center">
                                             <div className="w-6 h-6 rounded-full bg-brand-maroon dark:bg-brand-gold shadow-md ring-4 ring-brand-cream dark:ring-black"></div>
                                        </div>
                                        <div className="w-5/12 hidden md:block"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-5/12 hidden md:block"></div>
                                        <div className="w-2/12 hidden md:flex justify-center">
                                             <div className="w-6 h-6 rounded-full bg-brand-maroon dark:bg-brand-gold shadow-md ring-4 ring-brand-cream dark:ring-black"></div>
                                        </div>
                                        {content}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <ImageModal 
                images={timelineImages}
                currentIndex={modalIndex}
                onClose={closeModal}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </section>
    );
}

export default PhotoGallery;
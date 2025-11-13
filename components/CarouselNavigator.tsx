import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export interface CarouselTab {
  id: string;
  titleKey: keyof (typeof translations)['en'];
  imageUrl: string;
}

interface CarouselNavigatorProps {
  tabs: CarouselTab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const CarouselNavigator: React.FC<CarouselNavigatorProps> = ({ tabs, activeTab, setActiveTab }) => {
    const { t } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const activeTabRef = useRef<HTMLButtonElement>(null);

    // Scroll active tab into view
    useEffect(() => {
        if (activeTabRef.current && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeEl = activeTabRef.current;
            
            const containerRect = container.getBoundingClientRect();
            const activeElRect = activeEl.getBoundingClientRect();

            const scrollLeft = activeEl.offsetLeft - (containerRect.width / 2) + (activeElRect.width / 2);

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth',
            });
        }
    }, [activeTab]);

    return (
        <div ref={scrollContainerRef} className="carousel-container">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    ref={tab.id === activeTab ? activeTabRef : null}
                    onClick={() => setActiveTab(tab.id)}
                    className={`carousel-card ${activeTab === tab.id ? 'active' : ''}`}
                    aria-pressed={activeTab === tab.id}
                >
                    <div className="carousel-card-bg" style={{ backgroundImage: `url(${tab.imageUrl})` }} />
                    <div className="carousel-card-overlay" />
                    {/* Fix: Cast translation value to string to resolve ReactNode type error. */}
                    <h2 className="carousel-card-title">{t[tab.titleKey] as string}</h2>
                </button>
            ))}
        </div>
    );
};

export default CarouselNavigator;
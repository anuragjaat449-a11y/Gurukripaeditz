import React from 'react';
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

    return (
        <div className="nav-circles-container">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`nav-circle-item ${activeTab === tab.id ? 'active' : ''}`}
                    aria-pressed={activeTab === tab.id}
                >
                    <div className="nav-circle-image" style={{ backgroundImage: `url(${tab.imageUrl})` }} />
                    <div className="nav-circle-overlay" />
                    <span className="nav-circle-label">
                        {t[tab.titleKey] as string}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default CarouselNavigator;
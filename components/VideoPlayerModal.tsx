import React, { useState, useEffect, useMemo } from 'react';
import type { Video } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const getDirectDownloadUrl = (url: string | undefined): string | undefined => {
  if (!url) return undefined;
  const match = url.match(/file\/d\/(.*?)\//);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return url;
};

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  video: Video | null;
  isShort?: boolean;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ isOpen, onClose, onNext, onPrev, video, isShort }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [origin, setOrigin] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Set origin on client-side to ensure window is defined for YouTube's embed requirements.
    setOrigin(window.location.origin);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, onNext, onPrev]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Animation duration
  };

  const directDownloadUrl = useMemo(() => getDirectDownloadUrl(video?.downloadUrl), [video]);
  const downloadFilename = `GuruKripa_Video_${video?.id}.mp4`;
  const youtubeSrc = useMemo(() => {
    if (!video || video.type !== 'youtube' || !origin) return '';
    return `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&controls=1&fs=0&origin=${encodeURIComponent(origin)}`;
  }, [video, origin]);

  if (!isOpen || !video) return null;

  const playerTitle = video.type === 'youtube' ? 'YouTube Player' : 'Google Drive Player';
  
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      style={{ animation: isClosing ? 'fade-out-down 0.3s ease-in-out' : 'fade-in-up 0.3s ease-out' }}
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>

        <div className="relative w-full max-w-sm flex flex-col items-center">
            <div className="w-full aspect-[9/16] bg-black rounded-lg shadow-2xl shadow-brand-maroon/20 dark:shadow-brand-gold/40 overflow-hidden relative">
            {video.type === 'youtube' ? (
                <iframe
                    className={isShort ? "youtube-short-iframe-hack" : "w-full h-full"}
                    src={youtubeSrc}
                    title={playerTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                ></iframe>
            ) : (
                <iframe
                    className="w-full h-full border-0"
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    title={playerTitle}
                    allow="autoplay; encrypted-media;"
                    allowFullScreen
                ></iframe>
            )}
            </div>
            
            <div className="mt-4 flex justify-center items-center gap-4 w-full">
                {directDownloadUrl ? (
                    <a 
                    href={directDownloadUrl}
                    download={downloadFilename}
                    className="w-auto inline-flex items-center justify-center py-3 px-6 rounded-md text-sm font-bold btn-premium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        <span>{t.download}</span>
                    </a>
                ) : (
                    <button className="btn-disabled inline-flex items-center justify-center py-3 px-6 rounded-md text-sm font-bold" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                        <span>{t.notAvailable}</span>
                    </button>
                )}
            </div>
        </div>

        <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white z-10"
            aria-label="Close"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <button
            onClick={onPrev}
            className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
            aria-label="Previous Video"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <button
            onClick={onNext}
            className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
            aria-label="Next Video"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerModal;
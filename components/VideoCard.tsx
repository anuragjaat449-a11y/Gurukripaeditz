import React, { useState } from 'react';
import type { Video } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface VideoCardProps {
  video: Video;
  videoNumber: number;
  isPlaying: boolean;
  onPlay: (videoId: string) => void;
  titlePrefix: string;
}

// Helper function to convert a Google Drive 'view' URL to a direct download URL.
const getDirectDownloadUrl = (url: string | undefined): string | undefined => {
  if (!url) return undefined;
  // Extracts the file ID from URLs like: https://drive.google.com/file/d/FILE_ID/view
  const match = url.match(/file\/d\/(.*?)\//);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return url; // Fallback to the original URL if the format is unexpected.
};


const VideoCard: React.FC<VideoCardProps> = ({ video, videoNumber, isPlaying, onPlay, titlePrefix }) => {
  const { t } = useLanguage();
  const hasThumbnail = video.type === 'youtube' || video.type === 'gdrive';

  const [isVideoInvalid, setIsVideoInvalid] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'starting' | 'complete'>('idle');
  const [thumbnailUrl, setThumbnailUrl] = useState(() => {
    if (video.type === 'youtube') {
      return `https://img.youtube.com/vi/${video.id}/hq720.jpg`;
    }
    if (video.type === 'gdrive') {
      return `https://drive.google.com/thumbnail?id=${video.id}&sz=w640`;
    }
    return '';
  });

  const directDownloadUrl = getDirectDownloadUrl(video.downloadUrl);

  const handleImageError = () => {
    if (video.type === 'youtube') {
        if (thumbnailUrl.includes('hq720.jpg')) {
        setThumbnailUrl(`https://img.youtube.com/vi/${video.id}/sddefault.jpg`);
        } else if (thumbnailUrl.includes('sddefault.jpg')) {
        setThumbnailUrl(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`);
        } else {
        setIsVideoInvalid(true);
        }
    } else {
        setIsVideoInvalid(true);
    }
  };
  
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (video.type === 'youtube') {
        if (event.currentTarget.naturalWidth < 200) {
            setIsVideoInvalid(true);
        } else {
            setIsImageLoaded(true);
        }
    } else {
      setIsImageLoaded(true);
    }
  };

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (downloadState !== 'idle') {
      e.preventDefault();
      return;
    }
    setDownloadState('starting');
    setTimeout(() => {
      setDownloadState('complete');
      setTimeout(() => setDownloadState('idle'), 2500);
    }, 1500);
  };

  const isDownloadButtonDisabled = downloadState !== 'idle';
  const fullTitle = `${titlePrefix} #${videoNumber}`;
  const downloadFilename = `GuruKripa_${titlePrefix.replace(/\s/g, '')}_${videoNumber}.mp4`;
  
  const playerTitle = t.youTubePlayerTitle.replace('{titlePrefix}', titlePrefix).replace('{videoNumber}', String(videoNumber));
  const unavailableAria = t.videoUnavailableAria.replace('{titlePrefix}', titlePrefix).replace('{videoNumber}', String(videoNumber));
  const playAria = t.playVideoAria.replace('{titlePrefix}', titlePrefix).replace('{videoNumber}', String(videoNumber));
  const thumbnailAlt = t.thumbnailAlt.replace('{titlePrefix}', titlePrefix).replace('{videoNumber}', String(videoNumber));

  return (
    <div className="glass-card rounded-lg overflow-hidden group h-full flex flex-col relative">
      <div className="p-2 pb-0" style={{ transform: 'translateZ(20px)' }}>
        <div className="relative w-full overflow-hidden rounded-md border-2 border-brand-maroon/20 dark:border-brand-gold/30 group-hover:border-brand-maroon/80 dark:group-hover:border-brand-gold/80 transition-colors video-responsive">
          {isPlaying && !isVideoInvalid ? (
            video.type === 'youtube' ? (
                <iframe
                    className="youtube-short-iframe-hack"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&controls=1&fs=0`}
                    title={playerTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                ></iframe>
            ) : (
                <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    title={`${titlePrefix} Player`}
                    allow="autoplay; encrypted-media;"
                    allowFullScreen
                ></iframe>
            )
          ) : (
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); if (!isVideoInvalid) onPlay(video.id); }}
              className={`absolute inset-0 w-full h-full text-left ${!isVideoInvalid ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              aria-label={isVideoInvalid ? unavailableAria : playAria}
            >
              {isVideoInvalid ? (
                 <div className="w-full h-full bg-black/5 dark:bg-black/30 flex flex-col items-center justify-center text-center p-4 text-brand-maroon/70 dark:text-brand-gold/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span className="mt-2 text-sm font-semibold">{t.videoUnavailable}</span>
                </div>
              ) : hasThumbnail ? (
                <>
                  {!isImageLoaded && <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />}
                  <img 
                    className={`relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    src={thumbnailUrl} 
                    alt={thumbnailAlt}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                  />
                  {isImageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-center p-4">
                        <div className="w-16 h-16 mb-2 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-white font-semibold text-lg drop-shadow-md">{t.watch}</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/50 via-transparent to-transparent dark:from-black/50"></div>
                    <svg className="w-16 h-16 text-brand-maroon/50 dark:text-brand-gold/70 group-hover:text-brand-maroon/80 dark:group-hover:text-brand-gold drop-shadow-lg transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                </div>
              )}
            </a>
          )}
        </div>
      </div>
      <div className="p-4 pt-2 text-center flex-grow flex flex-col justify-between" style={{ transform: 'translateZ(50px)' }}>
        <h3 className={`font-semibold text-brand-maroon dark:text-brand-gold mb-2 text-xl transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          {fullTitle}
        </h3>
        <div className={`flex justify-center items-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          {directDownloadUrl ? (
            <a 
              href={directDownloadUrl}
              download={downloadFilename}
              onClick={handleDownloadClick}
              className={`w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold ${isDownloadButtonDisabled ? 'btn-disabled' : 'btn-premium'}`}
              aria-disabled={isDownloadButtonDisabled}
            >
              {downloadState === 'starting' ? (
                <>
                  <svg className="animate-spin mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span>{t.downloadStarting}</span>
                </>
              ) : downloadState === 'complete' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>{t.downloadStarted}</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  <span>{t.download}</span>
                </>
              )}
            </a>
          ) : (
             <button className="w-full btn-disabled inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                <span>{t.notAvailable}</span>
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
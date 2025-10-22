import React, { useState } from 'react';
import type { Video } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface VideoCardProps {
  video: Video;
  videoNumber: number;
  isPlaying: boolean;
  onPlay: (videoId: string) => void;
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


const VideoCard: React.FC<VideoCardProps> = ({ video, videoNumber, isPlaying, onPlay }) => {
  const { t } = useLanguage();
  const [isVideoInvalid, setIsVideoInvalid] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'starting' | 'complete'>('idle');
  const [thumbnailUrl, setThumbnailUrl] = useState(`https://img.youtube.com/vi/${video.id}/hq720.jpg`);

  const directDownloadUrl = getDirectDownloadUrl(video.downloadUrl);

  const handleImageError = () => {
    if (thumbnailUrl.includes('hq720.jpg')) {
      setThumbnailUrl(`https://img.youtube.com/vi/${video.id}/sddefault.jpg`);
    } else if (thumbnailUrl.includes('sddefault.jpg')) {
      setThumbnailUrl(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`);
    } else {
      setIsVideoInvalid(true);
    }
  };
  
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // YouTube's default "unavailable" thumbnail has a natural width of 120px.
    // A valid high-quality thumbnail will be much larger. We use < 200 to be safe.
    if (event.currentTarget.naturalWidth < 200) {
        setIsVideoInvalid(true);
    } else {
        setIsImageLoaded(true);
    }
  };

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent multiple clicks or following the link while in a non-idle state
    if (downloadState !== 'idle') {
      e.preventDefault();
      return;
    }

    setDownloadState('starting');

    // Stage 1: Show "Starting..." for 1.5 seconds
    setTimeout(() => {
      setDownloadState('complete');
      
      // Stage 2: Show "Started!" for 2.5 seconds before resetting
      setTimeout(() => {
        setDownloadState('idle');
      }, 2500);
    }, 1500);
  };

  const isDownloadButtonDisabled = downloadState !== 'idle';
  
  return (
    <div className="glass-card rounded-lg overflow-hidden group h-full flex flex-col">
      <div className="p-2">
        <div className="relative w-full overflow-hidden rounded-md border-2 border-brand-maroon/20 dark:border-brand-gold/30 group-hover:border-brand-maroon/80 dark:group-hover:border-brand-gold/80 transition-colors aspect-video">
          {isPlaying && !isVideoInvalid ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title={t.youTubePlayerTitle.replace('{videoNumber}', String(videoNumber))}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              onClick={(e) => {
                if (isVideoInvalid) {
                  e.preventDefault();
                  return;
                }
                e.preventDefault();
                onPlay(video.id);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className={`thumbnail-link block w-full h-full text-left ${!isVideoInvalid ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              aria-label={isVideoInvalid ? t.videoUnavailableAria.replace('{videoNumber}', String(videoNumber)) : t.playVideoAria.replace('{videoNumber}', String(videoNumber))}
            >
              {isVideoInvalid ? (
                 <div className="w-full h-full bg-black/5 dark:bg-black/30 flex flex-col items-center justify-center text-center p-4 text-brand-maroon/70 dark:text-brand-gold/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span className="mt-2 text-sm font-semibold">{t.videoUnavailable}</span>
                </div>
              ) : (
                <>
                  {/* Skeleton Loader - visible until image is loaded */}
                  {!isImageLoaded && (
                      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
                  )}
                  <img 
                    className={`relative w-full h-full object-cover transition-opacity duration-500 group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    src={thumbnailUrl} 
                    alt={t.thumbnailAlt.replace('{videoNumber}', String(videoNumber))}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                  />
                  {isImageLoaded && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </div>
                  )}
                </>
              )}
            </a>
          )}
        </div>
      </div>
      <div className="p-4 pt-2 text-center flex-grow flex flex-col justify-between">
        <h3 className="font-semibold text-brand-maroon dark:text-brand-gold mb-2 text-xl">
          {`${t.videoTitle}${videoNumber}`}
        </h3>
        <div className="flex justify-center items-center space-x-3">
          <a
            href={!isVideoInvalid ? `https://www.youtube.com/watch?v=${video.id}` : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (isVideoInvalid) e.preventDefault(); }}
            role="button"
            aria-disabled={isVideoInvalid}
            className={`flex-1 inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold ${isVideoInvalid ? 'btn-disabled' : 'btn-premium-secondary'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span className="ml-2">{t.watch}</span>
          </a>
          {directDownloadUrl ? (
            <a 
              href={directDownloadUrl}
              download={`GuruKripaShortz_Video_${videoNumber}.mp4`}
              onClick={handleDownloadClick}
              className={`flex-1 inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold transition-colors ${isDownloadButtonDisabled ? 'btn-disabled' : 'btn-premium'}`}
              aria-disabled={isDownloadButtonDisabled}
            >
              {downloadState === 'starting' ? (
                <>
                  <svg className="animate-spin mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{t.downloadStarting}</span>
                </>
              ) : downloadState === 'complete' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t.downloadStarted}</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{t.download}</span>
                </>
              )}
            </a>
          ) : (
             <button className="flex-1 btn-disabled inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>{t.notAvailable}</span>
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
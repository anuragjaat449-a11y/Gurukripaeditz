import React, { useState } from 'react';
import type { Video } from '../constants';

interface VideoCardProps {
  video: Video;
  videoNumber: number;
  onWatchClick: (videoId: string) => void;
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


const VideoCard: React.FC<VideoCardProps> = ({ video, videoNumber, onWatchClick }) => {
  const [imageError, setImageError] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'starting' | 'complete'>('idle');
  const [thumbnailUrl, setThumbnailUrl] = useState(`https://img.youtube.com/vi/${video.id}/hq720.jpg`);


  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const directDownloadUrl = getDirectDownloadUrl(video.downloadUrl);

  const handleImageError = () => {
    if (thumbnailUrl.includes('hq720.jpg')) {
      setThumbnailUrl(`https://img.youtube.com/vi/${video.id}/sddefault.jpg`);
    } else if (thumbnailUrl.includes('sddefault.jpg')) {
      setThumbnailUrl(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`);
    } else {
      setImageError(true);
    }
  };
  
  const handleWatch = (e: React.MouseEvent) => {
    e.preventDefault();
    onWatchClick(video.id);
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

  const isButtonDisabled = downloadState !== 'idle';

  return (
    <div className="glass-card rounded-lg overflow-hidden group h-full flex flex-col">
      <div className="p-2">
        <a 
          href={watchUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={handleWatch}
          className="thumbnail-link block overflow-hidden rounded-md relative border-2 border-brand-maroon/20 dark:border-brand-gold/30 group-hover:border-brand-maroon/80 dark:group-hover:border-brand-gold/80 transition-colors aspect-[9/16]"
        >
          {imageError ? (
             <div className="w-full h-full bg-black/5 dark:bg-black/30 flex flex-col items-center justify-center text-brand-maroon/70 dark:text-brand-gold/70">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="mt-2 text-sm font-semibold">Thumbnail unavailable</span>
            </div>
          ) : (
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src={thumbnailUrl} 
              alt={`Thumbnail for Video ${videoNumber}`}
              onError={handleImageError}
            />
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>
      <div className="p-4 pt-2 text-center flex-grow flex flex-col justify-between">
        <h3 className="font-semibold text-brand-maroon dark:text-brand-gold mb-2 text-xl flex items-center justify-center">
          Video #{videoNumber}
        </h3>
        <div className="flex justify-center items-center space-x-3">
          <button 
            onClick={handleWatch}
            className="flex-1 inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span className="ml-2">Watch</span>
          </button>
          {directDownloadUrl ? (
            <a 
              href={directDownloadUrl}
              download={`GuruKripaShortz_Video_${videoNumber}.mp4`}
              onClick={handleDownloadClick}
              className={`flex-1 inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold transition-colors ${isButtonDisabled ? 'btn-disabled' : 'btn-premium'}`}
              aria-disabled={isButtonDisabled}
            >
              {downloadState === 'starting' ? (
                <>
                  <svg className="animate-spin mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Starting...</span>
                </>
              ) : downloadState === 'complete' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Started!</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Download</span>
                </>
              )}
            </a>
          ) : (
            <button
              disabled
              title="Download link is not available for this video"
              className="flex-1 inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-disabled"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="ml-2">Not Available</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
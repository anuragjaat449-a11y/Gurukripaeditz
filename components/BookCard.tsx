import React from 'react';
import type { Book } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { language, t } = useLanguage();
  const title = language === 'hi' ? book.titleHi : book.titleEn;
  const video = book.video;

  let thumbnailUrl = book.coverImageUrl;
  // User requested to restore the first book's cover from its PDF.
  if (book.id === 'insaan-apne-aap-ko-jaan' && book.pdfUrl) {
    const match = book.pdfUrl.match(/file\/d\/(.*?)\//);
    if (match && match[1]) {
      const fileId = match[1];
      thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w640`;
    }
  }

  return (
    <div className="glass-card rounded-lg overflow-hidden group h-full flex flex-col">
      <div className="p-2" style={{ transform: 'translateZ(20px)' }}>
        <div className="relative w-full overflow-hidden rounded-md border-2 border-brand-maroon/20 dark:border-brand-gold/30 group-hover:border-brand-maroon/80 dark:group-hover:border-brand-gold/80 transition-all aspect-[2/3] shadow-lg">
          <img src={thumbnailUrl} alt={`Cover for ${title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async"/>
        </div>
      </div>
      <div className="p-4 pt-2 text-center flex-grow flex flex-col justify-between" style={{ transform: 'translateZ(40px)' }}>
        <h3 className="font-semibold text-brand-maroon dark:text-brand-gold mb-4 text-xl">
          {title}
        </h3>
        <div className="space-y-2">
          {book.pdfUrl && (
            <a href={`/book-reader.html?pdf=${encodeURIComponent(book.pdfUrl)}`} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
              <span>{t.readPdf}</span>
            </a>
          )}
          {book.audioUrl && (
            <a href={book.audioUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M18 3a1 1 0 00-1.196-.98l-15 2A1 1 0 001 5v10a1 1 0 001.196.98l15-2A1 1 0 0019 15V5a1 1 0 00-1-2zM3 6.892L17 5.108v2.002L3 8.892V6.892zm0 4.001L17 9.11v2.002L3 12.893V10.893z" /></svg>
              <span>{t.listenAudio}</span>
            </a>
          )}
          {video && (
            <a 
              href={
                video.type === 'gdrive'
                  ? `https://drive.google.com/file/d/${video.id}/view`
                  : `https://www.youtube.com/watch?v=${video.id}`
              }
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              <span>{t.watchVideo}</span>
            </a>
          )}
          {book.quizzes?.map((quiz, index) => (
              <a 
                key={quiz.id}
                href={quiz.url || `/book-quiz.html?id=${quiz.id}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold ${index > 0 ? 'btn-premium-secondary' : 'btn-premium'}`}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
                  <span>{language === 'hi' ? quiz.titleHi : quiz.titleEn}</span>
              </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
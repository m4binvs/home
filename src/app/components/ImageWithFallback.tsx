import { useState, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, className = '', ...props }: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <div className="text-center p-8">
          <div className="text-4xl mb-2">🖼️</div>
          <p className="text-sm text-muted-foreground">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`animate-pulse bg-muted ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'hidden' : ''}`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        {...props}
      />
    </>
  );
}

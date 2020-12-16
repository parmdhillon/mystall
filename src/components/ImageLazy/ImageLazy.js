import React from 'react';
import { LazyImage } from 'react-lazy-images';
import { MdBrokenImage } from 'react-icons/md';

import './ImageLazy.css';

const ImageLazy = ({ src, alt }) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      debounceDurationMs={3000}
      className="max-w-full max-h-full"
      placeholder={({ imageProps, ref }) => (
        <div ref={ref} className="w-full h-full animated-background"></div>
      )}
      // eslint-disable-next-line jsx-a11y/alt-text
      actual={({ imageProps }) => <img {...imageProps} />}
      error={() => (
        <div className="w-full h-full text-center flex flex-col items-center justify-center bg-gray-200 rounded-3xl">
          <span className="text-gray-400">
            <MdBrokenImage />{' '}
          </span>
          <span className="text-gray-400 text-sm">No Image</span>
        </div>
      )}
    />
  );
};

export default ImageLazy;

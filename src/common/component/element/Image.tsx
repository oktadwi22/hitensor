'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';


type ImageProps = {
  rounded?: string;
} & NextImageProps;

const Image = (props: ImageProps) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={
        `${ isLoading ? 'animate-pulse' : ''} overflow-hidden`
      }
    >
      <NextImage
        className={
          `${isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
         } duration-700 ease-in-out ${rounded} ${className}`

        }
        src={src}
        alt={alt}
        quality={100}
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;

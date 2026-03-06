"use client";

import Image, {type ImageProps} from "next/image";
import {useEffect, useState} from "react";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export function SafeImage({
  src,
  alt,
  fallbackSrc = "/hero/01.jpg",
  onError,
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const loading = props.priority ? undefined : (props.loading ?? "lazy");
  const quality = props.quality ?? 70;

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      loading={loading}
      quality={quality}
      decoding={props.decoding ?? "async"}
      onError={(e) => {
        onError?.(e);
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}

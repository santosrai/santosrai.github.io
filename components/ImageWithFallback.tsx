'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  fallbackClassName?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  fallbackClassName = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    setHasError(false)
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setImageLoaded(true)
      } else {
        setHasError(true)
      }
    } else {
      setImageLoaded(false)
    }
  }, [src])

  const fallbackBg = fallbackClassName || 'bg-slate-100 dark:bg-zinc-900/50'

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center ${fill ? 'absolute inset-0' : 'w-full h-full'} ${fallbackBg}`}
      >
        <div className="text-center space-y-3 px-4">
          <div className="w-16 h-16 mx-auto bg-slate-200/80 dark:bg-zinc-800/60 rounded-xl flex items-center justify-center border border-slate-300/70 dark:border-zinc-700/50">
            <svg
              className="w-8 h-8 text-slate-400 dark:text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">
              {src ? 'Image unavailable' : 'No image available'}
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-500">
              {src ? 'Unable to load project screenshot' : 'Project screenshot not provided'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={fill ? 'relative w-full h-full' : 'relative'}>
      {!imageLoaded && (
        <div
          className={`absolute inset-0 ${fallbackBg} animate-pulse ${fill ? '' : 'rounded-xl'}`}
          aria-hidden="true"
        />
      )}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        sizes={sizes}
        priority={priority}
        onError={() => {
          setHasError(true)
        }}
        onLoad={() => {
          setImageLoaded(true)
        }}
      />
    </div>
  )
}

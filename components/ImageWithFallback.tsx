'use client'

import { useState, useEffect } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Set a timeout to detect if image fails to load
  // Hooks must be called before any conditional returns
  useEffect(() => {
    if (!src || hasError) return

    const timeout = setTimeout(() => {
      if (!imageLoaded) {
        setHasError(true)
        setIsLoading(false)
      }
    }, 5000) // 5 second timeout

    return () => clearTimeout(timeout)
  }, [src, imageLoaded, hasError])

  // Handle empty src
  if (!src) {
    return (
      <div className={`flex items-center justify-center ${fill ? 'absolute inset-0' : 'w-full h-full'} ${fallbackClassName || 'bg-zinc-900/50'}`}>
        <div className="text-center space-y-4 px-4">
          <div className="w-20 h-20 mx-auto bg-zinc-800/60 rounded-xl flex items-center justify-center border border-zinc-700/50">
            <svg 
              className="w-10 h-10 text-zinc-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
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
            <p className="text-sm font-medium text-zinc-300">No image available</p>
            <p className="text-xs text-zinc-500">Project screenshot not provided</p>
          </div>
        </div>
      </div>
    )
  }

  // Handle loading errors
  if (hasError) {
    return (
      <div className={`flex items-center justify-center ${fill ? 'absolute inset-0' : 'w-full h-full'} ${fallbackClassName || 'bg-zinc-900/50'}`}>
        <div className="text-center space-y-4 px-4">
          <div className="w-20 h-20 mx-auto bg-zinc-800/60 rounded-xl flex items-center justify-center border border-zinc-700/50">
            <svg 
              className="w-10 h-10 text-zinc-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
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
            <p className="text-sm font-medium text-zinc-300">Image unavailable</p>
            <p className="text-xs text-zinc-500">Unable to load project screenshot</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={fill ? 'relative w-full h-full' : ''}>
      {isLoading && !imageLoaded && (
        <div className={`absolute inset-0 bg-zinc-900/50 animate-pulse ${fill ? '' : 'rounded-xl'}`} />
      )}
      <Image
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
          setIsLoading(false)
        }}
        onLoad={() => {
          setImageLoaded(true)
          setIsLoading(false)
        }}
        onLoadingComplete={() => {
          setImageLoaded(true)
          setIsLoading(false)
        }}
      />
      {/* Fallback img tag for better compatibility with static export */}
      {!imageLoaded && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${fill ? 'absolute inset-0 w-full h-full' : ''} ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onError={() => {
            setHasError(true)
            setIsLoading(false)
          }}
          onLoad={() => {
            setImageLoaded(true)
            setIsLoading(false)
          }}
          style={fill ? { objectFit: 'cover' } : undefined}
        />
      )}
    </div>
  )
}

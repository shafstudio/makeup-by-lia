"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseCarouselOptions {
  itemsCount: number;
  slidesToShow?: number;
  autoPlayInterval?: number;
  infinite?: boolean;
}

export function useCarousel({
  itemsCount,
  slidesToShow = 1,
  autoPlayInterval = 5000,
  infinite = true,
}: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate total number of slides based on items and slidesToShow
  const totalSlides = Math.ceil(itemsCount / slidesToShow);

  const clearAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const clearPauseTimeout = useCallback(() => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (infinite) {
        return (prevIndex + 1) % totalSlides;
      }
      return Math.min(prevIndex + 1, totalSlides - 1);
    });
  }, [infinite, totalSlides]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (infinite) {
        return prevIndex === 0 ? totalSlides - 1 : prevIndex - 1;
      }
      return Math.max(prevIndex - 1, 0);
    });
  }, [infinite, totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const pause = useCallback(() => {
    setIsPaused(true);
    clearAutoPlay();
    clearPauseTimeout();
  }, [clearAutoPlay, clearPauseTimeout]);

  const resume = useCallback(() => {
    clearPauseTimeout();
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000); // Resume after 3 seconds of no interaction
  }, [clearPauseTimeout]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    pause();
  }, [pause]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }

    setTouchStart(0);
    setTouchEnd(0);
    resume();
  }, [touchStart, touchEnd, next, prev, resume]);

  // Auto-play effect
  useEffect(() => {
    if (!isPaused && totalSlides > 1) {
      clearAutoPlay();
      autoPlayRef.current = setInterval(() => {
        next();
      }, autoPlayInterval);
    }

    return () => {
      clearAutoPlay();
    };
  }, [isPaused, next, autoPlayInterval, clearAutoPlay, totalSlides]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearAutoPlay();
      clearPauseTimeout();
    };
  }, [clearAutoPlay, clearPauseTimeout]);

  // Reset to valid index if slidesToShow changes
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(Math.max(0, totalSlides - 1));
    }
  }, [currentIndex, totalSlides]);

  return {
    currentIndex,
    totalSlides,
    next,
    prev,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    isPaused,
    pause,
    resume,
    canGoPrev: infinite || currentIndex > 0,
    canGoNext: infinite || currentIndex < totalSlides - 1,
  };
}

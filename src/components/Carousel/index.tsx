// src/components/Carousel/index.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

type TestimonialProps = {
  id: string;
  text: string;
  author: string;
  company: string;
};

type CarouselProps = {
  testimonials: TestimonialProps[];
  autoplay?: boolean;
  autoplayInterval?: number;
};

export function Carousel({ 
  testimonials, 
  autoplay = true, 
  autoplayInterval = 5000 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  useEffect(() => {
    if (!isPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        <AnimatePresence mode="wait" custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                goToNext();
              } else if (swipe > swipeConfidenceThreshold) {
                goToPrevious();
              }
            }}
            className={styles.slide}
          >
            <div className={styles.testimonial}>
              <div className={styles.quoteIcon}>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                  <path
                    d="M0 32V16C0 7.168 7.168 0 16 0h2.667v5.333H16c-5.888 0-10.667 4.779-10.667 10.667V18.667H16V32H0zM21.333 32V16c0-8.832 7.168-16 16-16H40v5.333h-2.667c-5.888 0-10.667 4.779-10.667 10.667V18.667H37.333V32H21.333z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              
              <blockquote className={styles.text}>
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className={styles.author}>
                <div className={styles.authorName}>
                  {testimonials[currentIndex].author}
                </div>
                <div className={styles.company}>
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className={styles.controls}>
        <button 
          className={styles.navButton}
          onClick={goToPrevious}
          aria-label="Depoimento anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className={styles.navButton}
          onClick={goToNext}
          aria-label="Próximo depoimento"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Play/Pause Button */}
      {autoplay && (
        <button 
          className={styles.playPauseButton}
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pausar autoplay' : 'Iniciar autoplay'}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4H4V12H6V4ZM12 4H10V12H12V4Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 2L12 8L4 14V2Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
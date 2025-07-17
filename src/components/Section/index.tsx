// src/components/Section/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'gradient';
  containerSize?: 'small' | 'medium' | 'large' | 'full';
};

export function Section({ 
  id,
  title, 
  subtitle, 
  children, 
  className = '',
  variant = 'default',
  containerSize = 'large'
}: SectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.section 
      id={id}
      className={`${styles.section} ${styles[variant]} ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`${styles.container} ${styles[containerSize]}`}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && (
              <motion.h2 
                className={styles.title}
                variants={titleVariants}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className={styles.subtitle}
                variants={subtitleVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        <motion.div 
          className={styles.content}
          variants={contentVariants}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
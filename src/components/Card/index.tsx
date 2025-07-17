// src/components/Card/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  variant?: 'default' | 'service';
  className?: string;
};

export function Card({ 
  icon, 
  title, 
  description, 
  link, 
  variant = 'default',
  className = '' 
}: CardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5
    }
  };

  const arrowVariants = {
    hover: {
      x: 5
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (link?.onClick) {
      e.preventDefault();
      link.onClick();
    }
  };

  return (
    <motion.div
      className={`${styles.card} ${styles[variant]} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
    >
      {icon && (
        <motion.div 
          className={styles.iconContainer}
          variants={iconVariants}
        >
          {icon}
        </motion.div>
      )}
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {link && (
          <motion.a
            href={link.href}
            className={styles.link}
            onClick={handleLinkClick}
            whileHover="hover"
          >
            <span>{link.text}</span>
            <motion.svg
              className={styles.arrow}
              variants={arrowVariants}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
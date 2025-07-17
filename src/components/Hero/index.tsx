// src/components/Hero/index.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Button } from '../Button';

export function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const titleWords = ['Contabilidade', 'Inteligente', 'para', 'o', 'Sucesso', 'do', 'seu', 'Negócio'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Detecta quando o usuário começa a rolar
      // Usa apenas 50px como threshold para desaparecer rapidamente
      const threshold = 50;
      
      if (scrollPosition > threshold) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const handleCTAClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Animation */}
      <motion.div 
        className={styles.backgroundAnimation}
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.animatedLines}></div>
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Título Principal com Animação em Cascata */}
          <motion.h1 className={styles.title}>
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={styles.titleWord}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            className={styles.subtitle}
            variants={subtitleVariants}
          >
            Deixe a burocracia conosco e foque no que realmente importa: o crescimento da sua empresa.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className={styles.cta}
            variants={buttonVariants}
          >
            <Button onClick={handleCTAClick}>
              Quero Simplificar Minha Contabilidade
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollIndicator ? 1 : 0, 
          y: showScrollIndicator ? 0 : 20 
        }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{ pointerEvents: showScrollIndicator ? 'auto' : 'none' }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span className={styles.scrollText}>Role para descobrir mais</span>
      </motion.div>
    </section>
  );
}
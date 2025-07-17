// src/components/Hero/index.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Button } from '../Button';

export function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const titleWords = ['Contabilidade', 'Inteligente', 'para', 'o', 'Sucesso', 'do', 'seu', 'Negócio'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Efeito parallax no fundo com múltiplas camadas
      if (heroRef.current) {
        // Diferentes velocidades para cada camada
        const layer1Speed = 0.3; // Elementos mais lentos (fundo)
        const layer2Speed = 0.5; // Elementos médios
        const layer3Speed = 0.7; // Elementos mais rápidos (frente)
        const layer4Speed = 0.2; // Elementos muito lentos
        const layer5Speed = 0.8; // Elementos muito rápidos
        
        // Movimento horizontal também
        const horizontalOffset1 = Math.sin(currentScrollY * 0.001) * 10;
        const horizontalOffset2 = Math.cos(currentScrollY * 0.0015) * 15;
        
        const translateY1 = currentScrollY * layer1Speed;
        const translateY2 = currentScrollY * layer2Speed;
        const translateY3 = currentScrollY * layer3Speed;
        const translateY4 = currentScrollY * layer4Speed;
        const translateY5 = currentScrollY * layer5Speed;
        
        heroRef.current.style.setProperty('--parallax-y1', `${translateY1}px`);
        heroRef.current.style.setProperty('--parallax-y2', `${translateY2}px`);
        heroRef.current.style.setProperty('--parallax-y3', `${translateY3}px`);
        heroRef.current.style.setProperty('--parallax-y4', `${translateY4}px`);
        heroRef.current.style.setProperty('--parallax-y5', `${translateY5}px`);
        heroRef.current.style.setProperty('--parallax-x1', `${horizontalOffset1}px`);
        heroRef.current.style.setProperty('--parallax-x2', `${horizontalOffset2}px`);
      }
      
      // Detecta quando o usuário começa a rolar
      // Usa apenas 50px como threshold para desaparecer rapidamente
      const threshold = 50;
      
      if (currentScrollY > threshold) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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



  const handleCTAClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Background Animation - Removido */}

      {/* Camadas de parallax */}
      <div className={styles['parallax-layer-2']}></div>
      <div className={styles['parallax-layer-3']}></div>
      <div className={styles['parallax-layer-4']}></div>
      <div className={styles['parallax-layer-5']}></div>
      
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
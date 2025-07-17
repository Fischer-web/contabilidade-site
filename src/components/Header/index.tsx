// src/components/Header/index.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import logoApoio from '../../assets/logo-apoio2.png';
import { Button } from '../Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement> | null, targetId: string) => {
    if (e) e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80; // Altura aproximada do header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (targetId: string) => {
    handleSmoothScroll(null, targetId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img src={logoApoio} alt="Apoio Contabilidade" />
        </a>

        {/* Navigation Desktop */}
        <nav className={styles.nav}>
          <a 
            href="#sobre" 
            className={styles.navLink}
            onClick={(e) => handleSmoothScroll(e, 'sobre')}
          >
            Sobre Nós
          </a>
          <a 
            href="#servicos" 
            className={styles.navLink}
            onClick={(e) => handleSmoothScroll(e, 'servicos')}
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            className={styles.navLink}
            onClick={(e) => handleSmoothScroll(e, 'contato')}
          >
            Contato
          </a>
        </nav>

        {/* CTA Button Desktop */}
        <div className={styles.cta}>
          <Button onClick={() => scrollToSection('contato')}>
            Fale com um Especialista
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className={styles.mobileNav}>
          <a 
            href="#sobre" 
            className={styles.mobileNavLink} 
            onClick={(e) => {
              handleSmoothScroll(e, 'sobre');
              setIsMobileMenuOpen(false);
            }}
          >
            Sobre Nós
          </a>
          <a 
            href="#servicos" 
            className={styles.mobileNavLink} 
            onClick={(e) => {
              handleSmoothScroll(e, 'servicos');
              setIsMobileMenuOpen(false);
            }}
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            className={styles.mobileNavLink} 
            onClick={(e) => {
              handleSmoothScroll(e, 'contato');
              setIsMobileMenuOpen(false);
            }}
          >
            Contato
          </a>
          <div className={styles.mobileCta}>
             <Button onClick={() => {
               scrollToSection('contato');
               setIsMobileMenuOpen(false);
             }}>
               Fale com um Especialista
             </Button>
           </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
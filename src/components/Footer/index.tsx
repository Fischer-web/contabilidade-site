// src/components/Footer/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import logoApoio from '../../assets/logo-apoio2.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = (type: 'phone' | 'email', value: string) => {
    if (type === 'phone') {
      window.open(`tel:${value}`, '_self');
    } else if (type === 'email') {
      window.open(`mailto:${value}`, '_self');
    }
  };

  return (
    <footer className={styles.footer}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className={styles.content}>
          {/* Coluna 1: Logo e Missão */}
          <motion.div className={styles.column} variants={itemVariants}>
            <div className={styles.logo}>
              <img src={logoApoio} alt="Apoio Contabilidade" />
            </div>
            <p className={styles.mission}>
              Transformando a gestão contábil com tecnologia e expertise. 
              Seu parceiro estratégico para o crescimento sustentável do seu negócio.
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.155C18.406 5.052 17.68 5.778 16.783 5.778C15.886 5.778 15.16 5.052 15.16 4.155C15.16 3.258 15.886 2.532 16.783 2.532C17.68 2.532 18.406 3.258 18.406 4.155Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.564H7.078V12.073H10.125V9.405C10.125 6.348 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.34 7.875 13.875 8.8 13.875 9.75V12.073H17.203L16.671 15.564H13.875V24C19.612 23.094 24 18.1 24 12.073Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Coluna 2: Links Rápidos */}
          <motion.div className={styles.column} variants={itemVariants}>
            <h3 className={styles.columnTitle}>Links Rápidos</h3>
            <nav className={styles.nav}>
              <a 
                href="#sobre" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#sobre');
                }}
              >
                Sobre Nós
              </a>
              <a 
                href="#servicos" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#servicos');
                }}
              >
                Serviços
              </a>
              <a 
                href="#depoimentos" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#depoimentos');
                }}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contato');
                }}
              >
                Contato
              </a>
            </nav>
          </motion.div>

          {/* Coluna 3: Informações de Contato */}
          <motion.div className={styles.column} variants={itemVariants}>
            <h3 className={styles.columnTitle}>Contato</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.029 7.029 1 12 1S21 5.029 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <p>R. dos Caçadores, 2206 - Sala 18</p>
                  <p>Velha, Blumenau - SC</p>
                  <p>CEP: 89040-002</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="currentColor"
                  />
                </svg>
                <button 
                  className={styles.contactButton}
                  onClick={() => handleContactClick('phone', '+554733284718')}
                >
                  (47) 3328-4718
                </button>
              </div>
              
              <div className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <button 
                  className={styles.contactButton}
                  onClick={() => handleContactClick('email', 'contato@apoiocontabilidade.com.br')}
                >
                  contato@apoiocontabilidade.com.br
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha de Copyright */}
        <motion.div 
          className={styles.copyright}
          variants={itemVariants}
        >
          <p>
            © {currentYear} Apoio Contabilidade. Todos os direitos reservados.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
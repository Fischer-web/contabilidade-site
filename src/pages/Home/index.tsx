// src/pages/Home/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { BackToTop } from '../../components/BackToTop';
import styles from './styles.module.css';

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  // Dados dos diferenciais
  const diferenciais = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 12L11 14L15 10M21 12C21 16.418 16.418 21 12 21C7.582 21 3 16.418 3 12C3 7.582 7.582 3 12 3C16.418 3 21 7.582 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Tecnologia Avançada",
      description: "Utilizamos as mais modernas ferramentas digitais para automatizar processos e garantir precisão em cada operação contábil."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM24 21V19C23.9993 18.1137 23.7044 17.2528 23.1614 16.5523C22.6184 15.8519 21.8581 15.3516 21 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe um atendimento único e dedicado, com soluções customizadas para suas necessidades específicas."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Experiência Comprovada",
      description: "Mais de 15 anos de experiência no mercado, atendendo empresas de todos os portes com excelência e confiabilidade."
    }
  ];

  // Dados dos serviços
  const servicos = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Contabilidade Geral",
      description: "Escrituração contábil completa, balancetes, demonstrações financeiras e toda documentação necessária para sua empresa.",
      link: {
        text: "Saiba mais",
        href: "#contato"
      }
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Consultoria Fiscal",
      description: "Orientação especializada em questões tributárias, planejamento fiscal e adequação às normas vigentes.",
      link: {
        text: "Saiba mais",
        href: "#contato"
      }
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8M16 4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4M16 4C16 5.10457 15.1046 6 14 6H10C8.89543 6 8 5.10457 8 4M12 11L8 15L12 19M16 11L20 15L16 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Folha de Pagamento",
      description: "Gestão completa de recursos humanos, cálculos trabalhistas, obrigações acessórias e rotinas de eSocial.",
      link: {
        text: "Saiba mais",
        href: "#contato"
      }
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Abertura de Empresas",
      description: "Processo completo de constituição empresarial, desde o planejamento até a obtenção de todas as licenças.",
      link: {
        text: "Saiba mais",
        href: "#contato"
      }
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline points="7.5,4.21 12,6.81 16.5,4.21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="7.5,19.79 7.5,14.6 3,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="21,12 16.5,14.6 16.5,19.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="12,22.08 12,16.91" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Planejamento Tributário",
      description: "Estratégias personalizadas para otimização da carga tributária e maximização da eficiência fiscal.",
      link: {
        text: "Saiba mais",
        href: "#contato"
      }
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Consultoria Empresarial",
      description: "Assessoria estratégica para crescimento sustentável, análise de viabilidade e gestão financeira.",
      link: {
        text: "Saiba mais",
        href: "#contato"
      }
    }
  ];

  // Dados dos depoimentos
  const testimonials = [
    {
      id: "1",
      text: "A Apoio Contabilidade transformou completamente nossa gestão financeira. O atendimento é excepcional e a tecnologia utilizada nos trouxe muito mais agilidade e precisão.",
      author: "Maria Silva",
      company: "Silva & Associados - CEO"
    },
    {
      id: "2",
      text: "Desde que começamos a trabalhar com a Apoio, nossa empresa cresceu 300%. O planejamento tributário e a consultoria estratégica foram fundamentais para nosso sucesso.",
      author: "João Santos",
      company: "TechStart Inovação - Fundador"
    },
    {
      id: "3",
      text: "Profissionalismo, agilidade e transparência. A equipe da Apoio sempre está disponível para esclarecer dúvidas e oferecer as melhores soluções para nossa empresa.",
      author: "Ana Costa",
      company: "Costa Comércio - Diretora Financeira"
    }
  ];

  const handleScrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.home}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Seção Sobre/Diferenciais */}
        <Section
          id="sobre"
          title="Por que escolher a Apoio Contabilidade?"
          subtitle="Nossos diferenciais que fazem a diferença no seu negócio"
          variant="default"
          containerSize="large"
        >
          <motion.div 
            className={styles.diferenciais}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {diferenciais.map((diferencial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  icon={diferencial.icon}
                  title={diferencial.title}
                  description={diferencial.description}
                  variant="default"
                />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Seção Serviços */}
        <Section
          id="servicos"
          title="Nossos Serviços"
          subtitle="Soluções completas para todas as necessidades da sua empresa"
          variant="dark"
          containerSize="large"
        >
          <motion.div 
            className={styles.servicos}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {servicos.map((servico, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  icon={servico.icon}
                  title={servico.title}
                  description={servico.description}
                  link={servico.link}
                  variant="service"
                />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Seção Depoimentos */}
        <Section
          id="depoimentos"
          title="O que nossos clientes dizem"
          subtitle="Histórias reais de sucesso e transformação"
          variant="gradient"
          containerSize="large"
        >
          <Carousel testimonials={testimonials} />
        </Section>

        {/* CTA Final */}
        <Section
          id="contato"
          title="Pronto para transformar sua gestão contábil?"
          subtitle="Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer"
          variant="default"
          containerSize="medium"
        >
          <motion.div 
            className={styles.ctaFinal}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className={styles.ctaContent}>
              <p className={styles.ctaText}>
                Não perca mais tempo com processos manuais e burocráticos. 
                Nossa equipe especializada está pronta para oferecer as melhores soluções para sua empresa.
              </p>
              <div className={styles.ctaButtons}>
                <Button 
                  variant="primary"
                  onClick={handleScrollToContact}
                >
                  Fale Conosco
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </Section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
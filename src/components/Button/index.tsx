// src/components/Button/index.tsx
import React from 'react';
import styles from './styles.module.css';

// Definimos os tipos de propriedades que nosso botão pode receber
type ButtonProps = {
  children: React.ReactNode; // O conteúdo do botão (ex: o texto)
  variant?: 'primary' | 'secondary'; // A aparência do botão
} & React.ComponentProps<'button'>; // Herda todas as outras props de um botão HTML (onClick, type, etc)

export function Button({
  children,
  variant = 'primary', // 'primary' será o padrão se nenhuma variante for informada
  className,
  ...props
}: ButtonProps) {
  
  // Combina as classes de estilo: a classe base 'btn' e a classe da variante
  const buttonClassName = `${styles.btn} ${styles[variant]} ${className || ''}`;

  return (
    <button className={buttonClassName.trim()} {...props}>
      {children}
    </button>
  );
}
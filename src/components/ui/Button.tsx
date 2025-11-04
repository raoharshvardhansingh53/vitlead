import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-btn focus:ring-primary-500',
    secondary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-btn focus:ring-accent-400',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
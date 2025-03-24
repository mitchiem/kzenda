
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <Link to="/" className={`block ${className}`}>
      <div className="flex flex-col items-start">
        <span className={`font-serif font-bold tracking-wider text-earth-900 ${sizeClasses[size]}`}>
          KEITH
        </span>
        <span className={`font-serif italic -mt-1.5 tracking-wide text-terracotta-600 ${sizeClasses[size]}`}>
          ZENDA
        </span>
        <div className="h-[2px] w-full bg-gradient-to-r from-terracotta-600 to-earth-500 mt-0.5"></div>
      </div>
    </Link>
  );
};

export default Logo;

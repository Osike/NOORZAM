import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

function Card({ children, className = '', onClick, hover = false }: CardProps) {
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-card overflow-hidden transition-all duration-300 ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className = '' }: CardImageProps) => (
  <img src={src} alt={alt} className={`w-full object-cover ${className}`} />
);

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBody = ({ children, className = '' }: CardBodyProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className = '' }: CardTitleProps) => (
  <h3 className={`text-xl font-semibold mb-2 ${className}`}>{children}</h3>
);

interface CardTextProps {
  children: React.ReactNode;
  className?: string;
}

const CardText = ({ children, className = '' }: CardTextProps) => (
  <p className={`text-neutral-600 ${className}`}>{children}</p>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter = ({ children, className = '' }: CardFooterProps) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Footer = CardFooter;

export default Card;
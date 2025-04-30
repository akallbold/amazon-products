import React from 'react';

interface ScrollSectionProps {
  title: string;
  className?: string;
  imageSrc?: string;
  onGuess?: (guess: string) => void;
  feedback?: string;
  isCorrect?: boolean;
  children?: React.ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  title,
  className,
  imageSrc,
  onGuess,
  feedback,
  isCorrect,
  children,
}) => {
  return (
    <div className={`scroll-section ${className || ''}`}>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ScrollSection;

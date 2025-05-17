import React from 'react';

interface ScrollSectionProps {
  title: string;
  className?: string;
  isCorrect?: boolean;
  showArrow?: boolean;
  children?: React.ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  title,
  className,
  children,
  showArrow
}) => {
  return (
    <div className={`scroll-section ${className || ''}`}>
    <div className="section-content">
      <h2 className="section-title">{title}</h2>
      {children}
    {showArrow && <div className={`scroll-arrow ${!showArrow ? 'hidden' : ''}`}>&#x2193;</div>}
    </div>
  </div>
  );
};

export default ScrollSection;

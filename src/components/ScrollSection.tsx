import React from 'react';

interface ScrollSectionProps {
  title: string;
  className?: string;
  isCorrect?: boolean;
  children?: React.ReactNode;
  showArrow?: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  title,
  className,
  children,
  showArrow = false,
}) => {
  return (
    <div className={`scroll-section ${className || ''}`}>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
      {showArrow && <div className="scroll-arrow">&#x2193;</div>}
    </div>
  );
};

export default ScrollSection;

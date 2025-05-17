import { useState, useEffect } from 'react';
import './App.css';
import ScrollSection from './components/ScrollSection';
import Gallery from './components/Gallery';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const sections = [
    { title: "Amazon ads kept popping up on my Instagram" },
    { title: "I didn't recognize anything they were showing me" },
    { title: "I kept clicking - just to find out what the heck everything was" },
    { title: "Here is a small collection of what I saw" }, 
    { title: "Can you guess what each thing is?" }, 
  ];
  console.log(currentSection);
  useEffect(() => {
    let hasUserScrolled = false;
  
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('.scroll-section');
  
      // Activate section
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5;
        if (isVisible) {
          section.classList.add('active');
          setCurrentSection(index);
        } else {
          section.classList.remove('active');
        }
      });
  
      if (!hasUserScrolled && window.scrollY > 2) {
        hasUserScrolled = true;
        setIsAtTop(false);
      }
  
      if (window.scrollY <= 2) {
        hasUserScrolled = false;
        setIsAtTop(true);
      }
    };

  
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {sections.map((section, index) => (
        <ScrollSection
          key={index}
          title={section.title}

          showArrow={index === 0 && isAtTop}
          className={index === 0 ? 'first-section' : undefined}

        />
      ))}
      <ScrollSection title="" className="gallery-section">
        <Gallery />
      </ScrollSection>
    </div>
  );
}

export default App;
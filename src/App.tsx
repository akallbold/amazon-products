import { useState, useEffect } from 'react';
import './App.css';
import ScrollSection from './components/ScrollSection';
import Gallery from './components/Gallery';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  console.log(currentSection);
  const sections = [
    { title: "Amazon ads kept popping up on my Instagram." },
    { title: "I didn’t recognize anything they were showing me." },
    { title: "So I kept clicking—just to find out what the heck everything was." },
    { title: "Here is a small sampling of what I saw." }, 
    { title: "Can you guess what each thing is?" }, 
  ];

  console.log(sections);
  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('.scroll-section');
      
      sections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect();
        const isVisible = sectionRect.top < windowHeight * 0.5 && sectionRect.bottom > windowHeight * 0.5;
        
        if (isVisible) {
          section.classList.add('active');
          setCurrentSection(index);
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once so the first section is visible on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {sections.map((section, index) => (
        <ScrollSection
          key={index}
          title={section.title}
          showArrow={index === 0 && currentSection === 0}
        />
      ))}
      <ScrollSection title="" className="gallery-section">
        <Gallery />
      </ScrollSection>
    </div>
  );
}

export default App;

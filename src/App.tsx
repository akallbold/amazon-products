import { useState, useEffect } from 'react';
import './App.css';
import ScrollSection from './components/ScrollSection';
import Gallery from './components/Gallery';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  console.log(currentSection);
  const sections = [
    { title: "Amazon keeps trying to sell things to me on Instagram" },
    { title: "and I don't know what anything is!" },
    { title: "I realized they weren't selling me things they thought I'd buy" },
    { title: "but instead they'd advertise things I'd want to know what they were" }, 
    { title: "and so I clicked and I clicked" }, 
    { title: "so your algorithm doesn't have to be as wild as mine" }, 
    { title: "Can you guess what each of these things is?" },
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {sections.map((section, index) => (
        <ScrollSection
          key={index}
          title={section.title}
        />
      ))}
      <ScrollSection title="" className="gallery-section">
        <Gallery />
      </ScrollSection>
    </div>
  );
}

export default App;

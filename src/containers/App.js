import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import AnimeList from '../components/AnimeList/AnimeList';
import SceneFinder from '../components/SceneFinder/SceneFinder';
import Nekosia from '../components/Nekosia/Nekosia';
import AnimeFacts from '../components/AnimeFacts/AnimeFacts';
import WaifuGallery from '../components/WaifuGallery/WaifuGallery';
import AnimeEmotes from '../components/AnimeEmotes/AnimeEmotes';

export default function App() {
    const [currentSection, setCurrentSection] = useState(0);
    
    const sections = [
        { id: 'animelist', component: <AnimeList /> },
        { id: 'scenefinder', component: <SceneFinder /> },
        { id: 'nekosia', component: <Nekosia /> },
        { id: 'animefacts', component: <AnimeFacts /> },
        { id: 'waifugallery', component: <WaifuGallery /> },
        { id: 'animeemotes', component: <AnimeEmotes /> }
    ];

    const navigateToSection = (index) => {
        setCurrentSection(index);
    };

    return (
        <div>
            <Navbar onNavigate={navigateToSection} currentSection={currentSection} />
            <div className="slider-container">
                <div 
                    className="slider-wrapper"
                    style={{
                        transform: `translateX(-${currentSection * 100}vw)`,
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    {sections.map((section, index) => (
                        <div key={section.id} className="slider-section">
                            {section.component}
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider-navigation">
                <button 
                    onClick={() => navigateToSection(Math.max(0, currentSection - 1))}
                    disabled={currentSection === 0}
                    className="nav-button prev-button"
                >
                    ‹ Previous
                </button>
                <div className="slider-dots">
                    {sections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => navigateToSection(index)}
                            className={`dot ${index === currentSection ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={() => navigateToSection(Math.min(sections.length - 1, currentSection + 1))}
                    disabled={currentSection === sections.length - 1}
                    className="nav-button next-button"
                >
                    Next ›
                </button>
            </div>
        </div>
    )
}

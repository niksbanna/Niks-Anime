import React from 'react'

export default function Navbar({ onNavigate, currentSection }) {
    const navItems = [
        { label: 'AnimeList', index: 0 },
        { label: 'SceneFinder', index: 1 },
        { label: 'Nekosia', index: 2 },
        { label: 'Facts', index: 3 },
        { label: 'Waifus & Nekos', index: 4 },
        { label: 'Emotes & GIFs', index: 5 }
    ];

    return (
        <div>
            <header className="black-80 tc pv4">
                <h1 className="mt2 mb0 i fw1 f1">Niks Anime</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked">Discover anime quotes, facts, waifus, nekos & more!</h2>
                <nav className="tc mw7 center mt4">
                    {navItems.map((item) => (
                        <a 
                            key={item.index}
                            className={`f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l ${currentSection === item.index ? 'active' : ''}`}
                            href="#0"
                            onClick={(e) => {
                                e.preventDefault();
                                onNavigate(item.index);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </header>
        </div>
    )
}

import React, { useState } from 'react';
import { ANIME_FACTS } from '../../Api';

export default function AnimeFacts() {
    const [fact, setFact] = useState({ fact: '', tags: [] });
    const [loading, setLoading] = useState(false);

    const fetchFact = () => {
        setLoading(true);
        // Get a random fact from the curated list
        const randomIndex = Math.floor(Math.random() * ANIME_FACTS.length);
        const randomFact = ANIME_FACTS[randomIndex];
        
        // Simulate API delay for better UX
        setTimeout(() => {
            setFact(randomFact);
            setLoading(false);
        }, 300);
    };

    return (
        <div className='min-vh-100' id='animefacts'>
            <section className="mw7 center pa3">
                <hr />
                <h2 className="f4 bg-near-black white mv0 pa3">Anime Facts</h2>
                <div className="flex items-center justify-center pa4">
                    <a 
                        onClick={fetchFact} 
                        href="#0" 
                        className="link f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
                    >
                        <span className="pr1">{loading ? 'Loading...' : 'Get Random Fact'}</span>
                        <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
                            <title>chevronRight icon</title>
                            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                        </svg>
                    </a>
                </div>
                {fact.fact && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                        <div className="f4 lh-copy measure center">
                            <p className="f5 f4-m f3-l lh-copy mt0">
                                {fact.fact}
                            </p>
                            {fact.tags && fact.tags.length > 0 && (
                                <div className="mt3">
                                    {fact.tags.map((tag, index) => (
                                        <span key={index} className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue mr2">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                )}
                {!fact.fact && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                        <p className="f5 lh-copy measure center tc">
                            Click the button above to discover interesting anime facts!
                        </p>
                    </section>
                )}
            </section>
        </div>
    );
}

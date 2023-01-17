import React, { useState } from 'react';
import './TopButton.css';

export default function TopButton() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <button style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop} id="myBtn" title="Go to top">
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                    <path d="M15.5 16.5L12 13L8.5 16.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M15.5 10.5L12 7L8.5 10.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

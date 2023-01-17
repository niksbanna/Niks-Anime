import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Random from '../components/ByRandom/Random';
import ByCharacterName from '../components/ByCharacterName/ByCharacterName';
import ByAnimeTitle from '../components/ByAnimeTitle/ByAnimeTitle';
import './App.css';

export default function App() {

    let mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div>
            <Navbar />
            <Random />
            <ByCharacterName />
            <ByAnimeTitle />
            <button onClick={topFunction} id="myBtn" title="Go to top">
                <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                    <path d="M15.5 16.5L12 13L8.5 16.5"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M15.5 10.5L12 7L8.5 10.5"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <div id="soon">
                <h5 className='tc pa5'>This feature will be available soon...🖤</h5>
            </div>
        </div>
    )
}

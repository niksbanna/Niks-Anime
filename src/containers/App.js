import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Random from '../components/ByRandom/Random';
import ByCharacterName from '../components/ByCharacterName/ByCharacterName';
import ByAnimeTitle from '../components/ByAnimeTitle/ByAnimeTitle';
import TopButton from '../components/TopScrollButton/TopButton';

export default function App() {

    return (
        <div>
            <Navbar />
            <Random />
            <ByCharacterName />
            <ByAnimeTitle />
            <TopButton />
            <div id="soon">
                <h5 className='tc pa5'>This feature will be available soon...🖤</h5>
            </div>
        </div>
    )
}

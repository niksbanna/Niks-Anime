import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Random from '../components/ByRandom/Random';
import ByCharacterName from '../components/ByCharacterName/ByCharacterName';
import ByAnimeTitle from '../components/ByAnimeTitle/ByAnimeTitle';
import AnimeFacts from '../components/AnimeFacts/AnimeFacts';
import WaifuGallery from '../components/WaifuGallery/WaifuGallery';
import AnimeEmotes from '../components/AnimeEmotes/AnimeEmotes';
import TopButton from '../components/TopScrollButton/TopButton';

export default function App() {

    return (
        <div>
            <Navbar />
            <Random />
            <ByCharacterName />
            <ByAnimeTitle />
            <AnimeFacts />
            <WaifuGallery />
            <AnimeEmotes />
            <TopButton />
        </div>
    )
}

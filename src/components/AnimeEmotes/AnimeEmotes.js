import React, { useState } from 'react';
import { WAIFU_API } from '../../Api';

export default function AnimeEmotes() {
    const [emote, setEmote] = useState({ url: '', anime: '' });
    const [loading, setLoading] = useState(false);
    const [selectedType, setSelectedType] = useState('');

    const emoteTypes = [
        { name: 'Hug', key: 'hug' },
        { name: 'Kiss', key: 'kiss' },
        { name: 'Slap', key: 'slap' },
        { name: 'Pat', key: 'pat' },
        { name: 'Smile', key: 'smile' },
        { name: 'Wave', key: 'wave' },
        { name: 'Highfive', key: 'highfive' },
        { name: 'Handhold', key: 'handhold' },
        { name: 'Nom', key: 'nom' },
        { name: 'Bite', key: 'bite' },
        { name: 'Cry', key: 'cry' },
        { name: 'Poke', key: 'poke' },
        { name: 'Wink', key: 'wink' },
        { name: 'Cuddle', key: 'cuddle' },
        { name: 'Bonk', key: 'bonk' },
        { name: 'Yeet', key: 'yeet' },
        { name: 'Blush', key: 'blush' },
        { name: 'Happy', key: 'happy' },
        { name: 'Kick', key: 'kick' },
        { name: 'Dance', key: 'dance' }
    ];

    const fetchEmote = (type) => {
        setLoading(true);
        setSelectedType(type);
        
        fetch(WAIFU_API[type])
            .then(response => response.json())
            .then(data => {
                // waifu.pics API returns { url: "..." }
                setEmote({
                    url: data.url,
                    anime: `${type.charAt(0).toUpperCase() + type.slice(1)} Reaction`
                });
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <div className='min-vh-100' id='animeemotes'>
            <section className="mw7 center pa3">
                <hr />
                <h2 className="f4 bg-near-black white mv0 pa3">Anime Emotes & GIFs</h2>
                <p className="f5 tc pa3">Choose an emotion or action to get a random anime GIF!</p>
                <div className="flex flex-wrap items-center justify-center pa3">
                    {emoteTypes.map(({ name, key }) => (
                        <a 
                            key={key}
                            onClick={() => fetchEmote(key)} 
                            href="#0" 
                            className="link f6 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box ma2"
                        >
                            <span>{loading && selectedType === key ? '...' : name}</span>
                        </a>
                    ))}
                </div>
                {emote.url && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3">
                        <div className="aspect-ratio">
                            <img 
                                src={emote.url} 
                                alt={`Anime ${selectedType}`}
                                className="db w-100 br3"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>
                        {emote.anime && (
                            <div className="mt3 tc">
                                <p className="f5 b">From: {emote.anime}</p>
                            </div>
                        )}
                    </section>
                )}
                {!emote.url && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                        <p className="f5 lh-copy measure center tc">
                            Click any emotion button above to see anime reaction GIFs!
                        </p>
                    </section>
                )}
            </section>
        </div>
    );
}

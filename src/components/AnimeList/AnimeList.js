import React, { useState, useEffect } from 'react';
import { JIKAN_API } from '../../Api';

export default function AnimeList() {
    const [animeList, setAnimeList] = useState([]);
    const [mangaList, setMangaList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('anime');

    const fetchTopAnime = () => {
        setLoading(true);
        fetch(`${JIKAN_API}/top/anime?limit=10`)
            .then(response => response.json())
            .then(data => {
                setAnimeList(data.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const fetchTopManga = () => {
        setLoading(true);
        fetch(`${JIKAN_API}/top/manga?limit=10`)
            .then(response => response.json())
            .then(data => {
                setMangaList(data.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchTopAnime();
        fetchTopManga();
    }, []);

    const currentList = activeTab === 'anime' ? animeList : mangaList;

    return (
        <div className='min-vh-100' id='animelist'>
            <section className="mw7 center pa3">
                <hr />
                <h2 className="f4 bg-near-black white mv0 pa3">Trending Anime & Manga</h2>
                
                <div className="flex items-center justify-center pa3">
                    <button 
                        onClick={() => setActiveTab('anime')}
                        className={`f6 link ba border-box pa3 ph4 mr2 pointer ${activeTab === 'anime' ? 'bg-black white' : 'bg-white black hover-bg-black hover-white'}`}
                    >
                        Top Anime
                    </button>
                    <button 
                        onClick={() => setActiveTab('manga')}
                        className={`f6 link ba border-box pa3 ph4 pointer ${activeTab === 'manga' ? 'bg-black white' : 'bg-white black hover-bg-black hover-white'}`}
                    >
                        Top Manga
                    </button>
                </div>

                {loading ? (
                    <div className="tc pa4">
                        <p className="f4">Loading...</p>
                    </div>
                ) : (
                    <div className="pa3">
                        {currentList.map((item, index) => (
                            <article key={item.mal_id} className="bb b--black-10 mb3 pb3">
                                <div className="flex items-start">
                                    <div className="w-20 pr3">
                                        <img 
                                            src={item.images?.jpg?.image_url} 
                                            alt={item.title}
                                            className="db w-100"
                                        />
                                    </div>
                                    <div className="w-80">
                                        <h3 className="f5 f4-ns mt0 mb2">
                                            #{index + 1} - {item.title}
                                        </h3>
                                        <p className="f6 lh-copy measure mv2 black-70">
                                            {item.synopsis?.substring(0, 200)}...
                                        </p>
                                        <div className="f7 mt2">
                                            <span className="dib mr3">⭐ Score: {item.score || 'N/A'}</span>
                                            <span className="dib mr3">📅 {item.year || item.published?.prop?.from?.year || 'N/A'}</span>
                                            <span className="dib">👥 {item.members?.toLocaleString()} members</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

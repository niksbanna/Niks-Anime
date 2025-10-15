import React, { useState } from 'react';
import { NEKOSIA_API } from '../../Api';

export default function Nekosia() {
    const [image, setImage] = useState({ url: '', artist: '' });
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('kitsune');

    const categories = [
        { name: 'Kitsune', key: 'kitsune' },
        { name: 'Neko', key: 'neko' },
        { name: 'Husbando', key: 'husbando' },
        { name: 'Waifu', key: 'waifu' }
    ];

    const fetchImage = (cat) => {
        setLoading(true);
        setCategory(cat);

        fetch(`${NEKOSIA_API}/api/v1/images/${cat}`)
            .then(response => response.json())
            .then(data => {
                if (data.image) {
                    setImage({
                        url: data.image.file.url,
                        artist: data.image.artist || 'Unknown'
                    });
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    return (
        <div className='min-vh-100' id='nekosia'>
            <section className="mw7 center pa3">
                <hr />
                <h2 className="f4 bg-near-black white mv0 pa3">Nekosia Gallery</h2>
                <p className="f6 lh-copy measure center tc pa3">
                    Discover amazing anime art! Click a category to get random images.
                </p>

                <div className="flex items-center justify-center pa3 flex-wrap">
                    {categories.map(({ name, key }) => (
                        <button
                            key={key}
                            onClick={() => fetchImage(key)}
                            disabled={loading}
                            className={`f6 link ba border-box pa3 ph4 ma2 pointer ${category === key && image.url ? 'bg-black white' : 'bg-white black hover-bg-black hover-white'}`}
                        >
                            {loading && category === key ? 'Loading...' : name}
                        </button>
                    ))}
                </div>

                {image.url && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3">
                        <div className="aspect-ratio">
                            <img 
                                src={image.url} 
                                alt={`Anime ${category}`}
                                className="db w-100 br3"
                                style={{ maxHeight: '600px', objectFit: 'contain' }}
                            />
                        </div>
                        <div className="mt3 tc">
                            <p className="f6">
                                <strong>Artist:</strong> {image.artist}
                            </p>
                            <p className="f6">
                                <strong>Category:</strong> {category}
                            </p>
                        </div>
                    </section>
                )}

                {!image.url && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                        <p className="f5 lh-copy measure center tc">
                            Click any category button above to discover amazing anime art!
                        </p>
                    </section>
                )}
            </section>
        </div>
    );
}

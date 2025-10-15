import React, { useState } from 'react';
import { WAIFU_API } from '../../Api';

export default function WaifuGallery() {
    const [image, setImage] = useState({ url: '', anime: '', artist: '' });
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('waifu');

    const fetchImage = (imageType) => {
        setLoading(true);
        setType(imageType);
        const endpoint = imageType === 'waifu' ? WAIFU_API.waifu : WAIFU_API.neko;
        
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                // waifu.pics API returns { url: "..." }
                setImage({ 
                    url: data.url,
                    anime: imageType === 'waifu' ? 'Random Waifu' : 'Random Neko',
                    artist: ''
                });
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <div className='min-vh-100' id='waifugallery'>
            <section className="mw7 center pa3">
                <hr />
                <h2 className="f4 bg-near-black white mv0 pa3">Waifu & Neko Gallery</h2>
                <div className="flex items-center justify-center pa4">
                    <a 
                        onClick={() => fetchImage('waifu')} 
                        href="#0" 
                        className="link f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr3"
                    >
                        <span className="pr1">{loading && type === 'waifu' ? 'Loading...' : 'Random Waifu'}</span>
                        <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
                            <title>chevronRight icon</title>
                            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                        </svg>
                    </a>
                    <a 
                        onClick={() => fetchImage('neko')} 
                        href="#0" 
                        className="link f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
                    >
                        <span className="pr1">{loading && type === 'neko' ? 'Loading...' : 'Random Neko'}</span>
                        <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
                            <title>chevronRight icon</title>
                            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                        </svg>
                    </a>
                </div>
                {image.url && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3">
                        <div className="aspect-ratio aspect-ratio--1x1">
                            <img 
                                src={image.url} 
                                alt={image.anime || 'Anime character'}
                                className="db w-100 br3"
                                style={{ maxHeight: '500px', objectFit: 'contain' }}
                            />
                        </div>
                        {image.anime && (
                            <div className="mt3">
                                <p className="f5 b mb2">Anime: {image.anime}</p>
                                {image.artist && <p className="f6 gray">Artist: {image.artist}</p>}
                            </div>
                        )}
                    </section>
                )}
                {!image.url && (
                    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                        <p className="f5 lh-copy measure center tc">
                            Click a button above to see random waifu or neko images!
                        </p>
                    </section>
                )}
            </section>
        </div>
    );
}

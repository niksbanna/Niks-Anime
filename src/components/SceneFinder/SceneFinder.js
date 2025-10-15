import React, { useState } from 'react';
import { TRACE_MOE_API } from '../../Api';

export default function SceneFinder() {
    const [imageUrl, setImageUrl] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const searchScene = () => {
        if (!imageUrl) {
            setError('Please upload an image first');
            return;
        }

        setLoading(true);
        setError('');
        setResults([]);

        // Convert data URL to blob
        fetch(imageUrl)
            .then(res => res.blob())
            .then(blob => {
                const formData = new FormData();
                formData.append('image', blob);

                return fetch(`${TRACE_MOE_API}/search?cutBorders`, {
                    method: 'POST',
                    body: formData,
                });
            })
            .then(response => response.json())
            .then(data => {
                if (data.result && data.result.length > 0) {
                    setResults(data.result.slice(0, 5)); // Top 5 results
                } else {
                    setError('No matches found. Try another image.');
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to search. Please try again.');
                setLoading(false);
            });
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className='min-vh-100' id='scenefinder'>
            <section className="mw7 center pa3">
                <hr />
                <h2 className="f4 bg-near-black white mv0 pa3">Anime Scene Finder</h2>
                <p className="f6 lh-copy measure center tc pa3">
                    Upload an anime screenshot and find out which anime it's from!
                </p>

                <div className="flex items-center justify-center pa3 flex-column">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="f6 pa2 mb3"
                        id="imageUpload"
                    />
                    
                    {imageUrl && (
                        <div className="mb3">
                            <img 
                                src={imageUrl} 
                                alt="Uploaded scene" 
                                className="db center"
                                style={{ maxWidth: '300px', maxHeight: '300px' }}
                            />
                        </div>
                    )}

                    <button
                        onClick={searchScene}
                        disabled={!imageUrl || loading}
                        className="f6 link ba border-box pa3 ph4 pointer bg-white black hover-bg-black hover-white"
                    >
                        {loading ? 'Searching...' : 'Find Anime'}
                    </button>
                </div>

                {error && (
                    <div className="tc pa3">
                        <p className="f5 dark-red">{error}</p>
                    </div>
                )}

                {results.length > 0 && (
                    <div className="pa3">
                        <h3 className="f5 tc mb3">Top Matches:</h3>
                        {results.map((result, index) => (
                            <article key={index} className="bb b--black-10 mb3 pb3">
                                <div className="flex items-start">
                                    <div className="w-30 pr3">
                                        <img 
                                            src={result.image} 
                                            alt={result.filename}
                                            className="db w-100"
                                        />
                                    </div>
                                    <div className="w-70">
                                        <h4 className="f5 mt0 mb2">
                                            {result.filename}
                                        </h4>
                                        <p className="f6 mv2">
                                            <strong>Episode:</strong> {result.episode || 'N/A'}
                                        </p>
                                        <p className="f6 mv2">
                                            <strong>Time:</strong> {formatTime(result.from)} - {formatTime(result.to)}
                                        </p>
                                        <p className="f6 mv2">
                                            <strong>Similarity:</strong> {(result.similarity * 100).toFixed(2)}%
                                        </p>
                                        {result.video && (
                                            <video 
                                                src={result.video} 
                                                controls 
                                                className="db w-100 mt2"
                                                style={{ maxHeight: '200px' }}
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
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

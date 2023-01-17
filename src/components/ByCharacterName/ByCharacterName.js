import React, { useRef, useState } from 'react'
import { API_KEY } from '../../Api';

export default function ByCharacterName() {
    const [quote, setQoute] = useState([]);
    const chrName = useRef([]);

    const handleOnClick = (event) => {
        const searchValue = document.getElementById('search');
        const searchData = searchValue.value;
        chrName.current = searchData;

        if (chrName.current.length > 0) {
            fetch(`${API_KEY}random/character?name=${chrName.current}`)
                .then(response => response.json())
                .then(response => setQoute(response))
                .catch((err) => console.log(err))
        }
    }

    return (
        <div>
            <section className="min-vh-100 mw7 center avenir" id='bycharactername'>
                <hr />
                <h2 className="f4 bg-near-black white mv0 pa3">By Character Name</h2>
                <div className='pa2'>
                    <input
                        id='search'
                        className="pa3 ba b--gren"
                        type="search"
                        placeholder="type character name"
                    />
                    <a onClick={handleOnClick} href="#0" className="link f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
                        <span className="pr1">Search</span>
                        <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
                            <title>chevronRight icon</title>
                            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                        </svg>
                    </a>
                </div>
                <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                    <h1 className="mt0">{quote.anime}</h1>
                    <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                        <p className="f5 f4-m f3-l lh-copy measure mt0">
                            {quote.quote}
                        </p>
                        <cite className="f6 ttu tracked fs-normal">―{quote.character}</cite>
                    </blockquote>
                </section>
            </section>
        </div>
    )
}

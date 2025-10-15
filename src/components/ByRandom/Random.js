import React, { useState } from 'react';
import Buttons from './Buttons';
import Quote from './Quote';
import { WAIFU_API } from '../../Api'



export default function Random() {
    const [quote, setQoute] = useState([]);

    const handleClick = (value) => {
        if (value) {
            fetch(WAIFU_API.quote)
                .then(response => response.json())
                .then(data => {
                    // waifu.it returns { quote: "...", author: "...", anime: "..." }
                    setQoute({
                        quote: data.quote,
                        character: data.author,
                        anime: data.anime
                    });
                })
                .catch((err) => console.log(err))
        }
    }
    return (
        <div className='min-vh-100' id='random'>
            <Buttons click={handleClick} />
            <Quote anime={quote.anime} qt={quote.quote} name={quote.character} quoteLength={quote.length} />
        </div>
    )
}

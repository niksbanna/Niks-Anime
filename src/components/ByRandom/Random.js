import React, { useState } from 'react';
import Buttons from './Buttons';
import Quote from './Quote';
import { API_KEY } from '../../Api'



export default function Random() {
    const [quote, setQoute] = useState([]);

    const handleClick = (value) => {
        if (value) {
            fetch(`${API_KEY}random`)
                .then(response => response.json())
                .then(response => setQoute(response))
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

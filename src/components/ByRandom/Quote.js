import React from 'react'

export default function Quote({ anime, qt, name, quoteLength }) {


    return (
        <div>
            <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <h1 className="mt0">{anime}</h1>
                <blockquote className=" ml0 mt0 pl4 black-90 bl bw2 b--blue">
                    <p className="f5 f4-m f3-l lh-copy measure mt0">
                        {anime ? qt : 'Click on Random to generate a quote.'}
                    </p>
                    <cite className="f6 ttu tracked fs-normal">―{name}</cite>
                </blockquote>
            </section>
        </div>
    )
}

import React from 'react'

export default function Navbar() {
    return (
        <div>
            <header className="black-80 tc pv4">
                <h1 className="mt2 mb0 i fw1 f1">Niks Anime</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked">Discover anime quotes, facts, waifus, nekos & more!</h2>
                <nav className=" tc mw7 center mt4">
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l active" href="#random">Quotes</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#bycharactername">By Character</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#byanimetitle">By Anime</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#animefacts">Facts</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#waifugallery">Waifus & Nekos</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#animeemotes">Emotes & GIFs</a>
                </nav>
            </header>
        </div>
    )
}

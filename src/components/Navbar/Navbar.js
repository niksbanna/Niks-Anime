import React from 'react'

export default function Navbar() {
    return (
        <div>
            <header className="black-80 tc pv4">
                <h1 className="mt2 mb0 i fw1 f1">Niks Anime</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked">Find your favourite anime quotes</h2>
                <nav className=" tc mw7 center mt4">
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l active" href="#random">Random</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#bycharactername">By Character Name</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#byanimetitle">By Anime Title</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#soon">Get 10 Quotes</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#soon">Get 10 Quotes by Anime Character</a>
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l" href="#soon">Get 10 Quotes by Anime Title</a>
                </nav>
            </header>
        </div>
    )
}

import React from 'react'

export default function Navbar() {
    return (
        <div>
            <header className="bg-white black-80 tc pv4 avenir">
                <a href="https://github.com/niksbanna" target={'_blank'} rel="noreferrer" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
                    <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                </a>
                <h1 className="mt2 mb0 baskerville i fw1 f1">Niks Anime</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked">Find your favourite anime quotes</h2>
                <nav className="bt bb tc mw7 center mt4">
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

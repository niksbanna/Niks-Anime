// Waifu.it API base URL (for quotes, characters, anime)
export const WAIFU_IT_API = 'https://waifu.it/api/v4';

// Multiple API endpoints for anime content using waifu.it
export const WAIFU_API = {
    // Quote endpoints from waifu.it
    quote: `${WAIFU_IT_API}/quote`,
    
    // Image endpoints from waifu.pics API (SFW only)
    waifu: 'https://api.waifu.pics/sfw/waifu',
    neko: 'https://api.waifu.pics/sfw/neko',
    
    // Reaction GIFs from waifu.pics
    hug: 'https://api.waifu.pics/sfw/hug',
    kiss: 'https://api.waifu.pics/sfw/kiss',
    slap: 'https://api.waifu.pics/sfw/slap',
    pat: 'https://api.waifu.pics/sfw/pat',
    smile: 'https://api.waifu.pics/sfw/smile',
    wave: 'https://api.waifu.pics/sfw/wave',
    highfive: 'https://api.waifu.pics/sfw/highfive',
    handhold: 'https://api.waifu.pics/sfw/handhold',
    nom: 'https://api.waifu.pics/sfw/nom',
    bite: 'https://api.waifu.pics/sfw/bite',
    cry: 'https://api.waifu.pics/sfw/cry',
    poke: 'https://api.waifu.pics/sfw/poke',
    wink: 'https://api.waifu.pics/sfw/wink',
    
    // Additional endpoints
    cuddle: 'https://api.waifu.pics/sfw/cuddle',
    bonk: 'https://api.waifu.pics/sfw/bonk',
    yeet: 'https://api.waifu.pics/sfw/yeet',
    blush: 'https://api.waifu.pics/sfw/blush',
    happy: 'https://api.waifu.pics/sfw/happy',
    kick: 'https://api.waifu.pics/sfw/kick',
    dance: 'https://api.waifu.pics/sfw/dance',
    cringe: 'https://api.waifu.pics/sfw/cringe',
    bully: 'https://api.waifu.pics/sfw/bully'
};

// Anime facts - using a curated list since external API may not be available
export const ANIME_FACTS = [
    { fact: "The word 'anime' is the Japanese term for animation, which means all forms of animated media.", tags: ["trivia", "language"] },
    { fact: "One Piece holds the Guinness World Record for 'the most copies published for the same comic book series by a single author.'", tags: ["one piece", "record"] },
    { fact: "Studio Ghibli's Spirited Away won the Academy Award for Best Animated Feature in 2003.", tags: ["ghibli", "award"] },
    { fact: "The first anime ever made was in 1917 and was only about 2 minutes long.", tags: ["history", "trivia"] },
    { fact: "In Japan, more paper is used to print manga than toilet paper.", tags: ["manga", "japan"] },
    { fact: "Pokémon was originally called 'Capsule Monsters' before being renamed.", tags: ["pokemon", "trivia"] },
    { fact: "Death Note was banned in China for encouraging youth to commit violence.", tags: ["death note", "controversy"] },
    { fact: "The anime industry in Japan generates over 17 billion dollars annually.", tags: ["industry", "economics"] },
    { fact: "Naruto's surname 'Uzumaki' means 'spiral' or 'whirlpool' in Japanese.", tags: ["naruto", "language"] },
    { fact: "Attack on Titan's creator Hajime Isayama was inspired by a drunk customer who made him feel threatened.", tags: ["attack on titan", "inspiration"] },
    { fact: "Dragon Ball Z was originally supposed to end after the Frieza saga.", tags: ["dragon ball", "trivia"] },
    { fact: "Sailor Moon was one of the first anime to feature a team of magical girls.", tags: ["sailor moon", "history"] },
    { fact: "The word 'kawaii' (cute) is used over 5 million times per day in Japan.", tags: ["culture", "language"] },
    { fact: "My Hero Academia's Izuku Midoriya shares the same birthday as his creator, Kohei Horikoshi - July 15.", tags: ["my hero academia", "trivia"] },
    { fact: "Code Geass was inspired by The Count of Monte Cristo novel by Alexandre Dumas.", tags: ["code geass", "inspiration"] }
];
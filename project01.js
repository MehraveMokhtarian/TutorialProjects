// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"In the tapestry of life, adversity is but a thread, woven alongside courage, and with each stitch, we craft our own strength."`,
        person: `Quill of Elara Nightshade`
    },
    {
        quote: `"Stars are not merely distant specks of light; they are dreams suspended in the velvet embrace of the universe."`,
        person: `Celestia Starweaver`
    },
    {
        quote: `"In the garden of existence, the flowers of kindness bloom eternal, their fragrance touching every soul that passes by."`,
        person: `Linden Heartrose`
    },
    {
        quote: `"Time dances to its own melody, weaving the symphony of our lives with moments both fleeting and eternal."`,
        person: `Aria Tempus`
    },
    {
        quote: `"Like the river finding its course, so too does the heart navigate the twists and turns of fate to find its purpose."`,
        person: `Riverine Willow`
    },
    {
        quote: `"Whispers of the past are the threads that embroider the canvas of our memories, creating a tapestry of who we are."`,
        person: `Evelyn Whisperwind`
    },
    {
        quote: `"Through the pages of uncertainty, the story of resilience is written, and the chapters of growth unfold."`,
        person: `Sage Everbright`
    },
    {
        quote: `"Mountains rise not only to touch the sky, but to remind us that with every ascent, we too can touch the divine."`,
        person: `Kellan Highpeak`
    },
    {
        quote: `"The symphony of life conducts its magnum opus when diverse hearts and minds harmonize in the grand theater of existence."`,
        person: `Maestro Silvanus`
    },
    {
        quote: `"As echoes linger within the canyon of time, so do our actions reverberate in the hearts of others, creating ripples of legacy."`,
        person: `Echo Suncaster`
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
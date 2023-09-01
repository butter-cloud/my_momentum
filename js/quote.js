const quotes = [
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Well done is better than well said. ",
        author: "Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light. ",
        author: "Aristotle"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail. ",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "Go confidently in the direction of your dreams! Live the life you've imagined. ",
        author: "Henry David Thoreau"
    },
    {
        quote: "The way to get started is to quit talking and begin doing. ",
        author: "Walt Disney"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;


const quotes = [
{
    quote: "don't try this at home",},
{quote: "yes yes yes is my magic",},
{quote: "can you tell me your secret?",},
{quote: "haehaehae",},
{quote: "What is your love",},
{quote: "where is love",},
{quote: "i can't feel it, see it",},
{quote: "no is just no",},
{quote: "my friends is so cute",},
{quote: "homeschool",}
];

const goodsentence = document.querySelector(".quote1 span");

const random = quotes[Math.floor(Math.random() * quotes.length)];

goodsentence.innerText = random.quote;

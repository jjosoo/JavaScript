const quotes = [
    {
        quotes : "안녕하세요",
        author : "아따맘마 O",
    },
    {
        quotes : "감사해요",
        author : "아따맘마 OS",
    },
    {
        quotes : "잘있어요",
        author : "아따맘마 OST",
    },
    {
        quotes : "안녕하세요",
        author : "아따맘마 O",
    },
    {
        quotes : "감사해요",
        author : "아따맘마 OS",
    },
    {
        quotes : "잘있어요",
        author : "아따맘마 OST",
    },
    {
        quotes : "안녕하세요",
        author : "아따맘마 O",
    },
    {
        quotes : "감사해요",
        author : "아따맘마 OS",
    },
    {
        quotes : "잘있어요",
        author : "아따맘마 OST",
    },
    {
        quotes : "다시만나요",
        author : "아따맘마 OST 좋아",
    }
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodaysQuote.quotes;
author.innerText = TodaysQuote.author;

// main.js
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

document.querySelector("#quoteButton").addEventListener("click", function() {
    const quote = getRandomQuote();
    document.querySelector("#quoteDisplay").textContent = quote;
});

document.querySelector("#searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const result = quotes.find(quote => quote.toLowerCase().includes(searchTerm));
    document.querySelector("#searchResult").textContent = result || "No matching quotes found.";
});

const favorites = [];

document.querySelector("#saveButton").addEventListener("click", function() {
    const currentQuote = document.querySelector("#quoteDisplay").textContent;
    if (!favorites.includes(currentQuote)) {
        favorites.push(currentQuote);
        const listItem = document.createElement("li");
        listItem.textContent = currentQuote;
        document.querySelector("#favoritesList").appendChild(listItem);
    }
});

setInterval(() => {
    const quote = getRandomQuote();
    document.querySelector("#quoteDisplay").textContent = quote;
}, 10000);
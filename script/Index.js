// Array of quote objects
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
];

// DOM elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");

let previousQuoteIndex = -1;

// Function to get a random quote
function getRandomQuote() {
  let randomIndex;

  // Ensure we don't repeat the same quote twice in a row
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousQuoteIndex && quotes.length > 1);

  previousQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

// Function to display a new quote
function displayNewQuote() {
  const quote = getRandomQuote();
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;

  // Add animation
  quoteText.style.animation = "none";
  quoteAuthor.style.animation = "none";
  void quoteText.offsetWidth; // Trigger reflow
  void quoteAuthor.offsetWidth; // Trigger reflow
  quoteText.style.animation = "fadeIn 1s ease-in";
  quoteAuthor.style.animation = "fadeIn 1s ease-in";
}

// Event listener for the button
newQuoteBtn.addEventListener("click", displayNewQuote);

// Display a quote when the page loads
displayNewQuote();

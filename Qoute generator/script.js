const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. - Mother Teresa",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  ];
  
  const quoteElement = document.getElementById("quote");
  const newQuoteButton = document.getElementById("new-quote");
  const tweetQuoteButton = document.getElementById("tweet-quote");
  
  newQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  });
  
  tweetQuoteButton.addEventListener("click", () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quoteElement.textContent
    )}`;
    window.open(tweetUrl, "_blank");
  });
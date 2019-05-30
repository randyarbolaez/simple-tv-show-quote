let author = document.getElementById('author');
let quote = document.getElementById('quote');
let source = document.getElementById('source');

fetch(
  'https://raw.githubusercontent.com/msramalho/json-tv-quotes/master/quotes.json'
)
  .then(res => res.json())
  .then(res => {
    let randomTvShowQuote = res[Math.floor(Math.random() * res.length)];
    if (randomTvShowQuote.author) {
      author.innerHTML = `-${randomTvShowQuote.author}`;
    }
    quote.innerHTML = `${randomTvShowQuote.quote}`;
    source.innerHTML = `<a target="_blank"  href="https://en.wikipedia.org/wiki/${
      randomTvShowQuote.source
    }">${randomTvShowQuote.source}</a>`;
    console.log(randomTvShowQuote);
  });

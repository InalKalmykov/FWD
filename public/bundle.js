// bundle.js

// Example: If you want to fetch XKCD comic data and display it
const comicContainer = document.getElementById('comic-container');
const comicImg = document.getElementById('comic-img');
const comicTitle = document.getElementById('comic-title');
const comicDate = document.getElementById('comic-date');

fetch('https://xkcd.com/info.0.json')
  .then(response => response.json())
  .then(data => {
    comicImg.src = data.img;
    comicImg.alt = data.alt;
    comicTitle.textContent = data.title;
    comicDate.textContent = `Published on: ${data.day}/${data.month}/${data.year}`;
  })
  .catch(error => console.error('Error fetching XKCD comic:', error));

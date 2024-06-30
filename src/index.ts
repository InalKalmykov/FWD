import moment from 'moment';
import { Comic, ComicIdResponse } from './interfaces';

document.addEventListener('DOMContentLoaded', () => {
  const email = 'i.kalmykov@innopolis.university'; // Replace with your email
  const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching comic ID: ${response.status}`);
      }
      return response.json() as Promise<ComicIdResponse>;
    })
    .then(data => {
      const comicId = data.id;
	console.log(comicId);
      const comicUrl = `https://xkcd.com/${comicId}/info.0.json`;

      fetch(comicUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error fetching XKCD comic: ${response.status}`);
          }
          return response.json() as Promise<Comic>;
        })
        .then(comicData => {
          const comicImg = document.getElementById('comic-img') as HTMLImageElement;
          const comicTitle = document.getElementById('comic-title') as HTMLParagraphElement;
          const comicDate = document.getElementById('comic-date') as HTMLParagraphElement;

          comicImg.src = comicData.img;
          comicImg.alt = comicData.alt;
          comicTitle.textContent = comicData.title;

          const releaseDate = moment({
            year: parseInt(comicData.year),
            month: parseInt(comicData.month) - 1,
            day: parseInt(comicData.day),
          }).toDate();
          comicDate.textContent = releaseDate.toLocaleDateString();

          // Using moment.js for relative time
          const timeAgo = moment(releaseDate).fromNow();
          comicDate.textContent += ` (${timeAgo})`;
        })
        .catch(error => {
          console.error('Error fetching or displaying XKCD comic:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching comic ID:', error);
    });
});

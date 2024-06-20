document.addEventListener('DOMContentLoaded', function() {
    const email = 'i.kalmykov@innopolis.university'; 
    const apiUrl = 'https://fwd.innopolis.university/api/hw2';

    // Fetch the comic ID
    fetch(`${apiUrl}?email=${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(data => {
            const comicId = data;
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => response.json())
        .then(comic => {
            // Update the DOM with the comic details
            document.getElementById('comic-title').innerText = comic.title;
            document.getElementById('comic-image').src = comic.img;
            document.getElementById('comic-image').alt = comic.alt;

            const date = new Date(comic.year, comic.month - 1, comic.day);
            document.getElementById('comic-date').innerText = date.toLocaleDateString();
        })
        .catch(error => console.error('Error:', error));
});
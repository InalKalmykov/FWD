import { useState, useEffect } from 'react';

const XkcdComic = ({ email }) => {
  const [comicData, setComicData] = useState(null);
  useEffect(() => {
    const fetchComicId = async () => {
      try {
        const params = new URLSearchParams({ email });
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch XKCD comic ID');
        }

        const data = await response.json();

        fetchComic(data);
      } catch (error) {
        console.error('Error fetching XKCD comic ID:', error);
      }
    };

    const fetchComic = async (comicId) => {
      try {
        const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch XKCD comic');
        }
        const data = await response.json();
        setComicData(data);
      } catch (error) {
        console.error('Error fetching XKCD comic:', error);
      }
    };

    fetchComicId();
  }, [email]);

  if (!comicData) {
    return <p>Loading comic...</p>;
  }

  const publishDate = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`);

  return (
    <section id="xkcd">
      <h2>Latest XKCD Comic</h2>
      <div id="comic-container">
        <img id="comic-img" src={comicData.img} alt={comicData.alt} />
        <div id="comic-info">
          <p id="comic-title">{comicData.safe_title}</p>
          <p id="comic-date">{publishDate.toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  );
};

export default XkcdComic;

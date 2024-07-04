import React, { useEffect, useState } from 'react';

const XkcdComic: React.FC<{ email: string }> = ({ email }) => {
  const [comicData, setComicData] = useState<any>({});

  useEffect(() => {
    const fetchComicData = async () => {
      try {
        // Fetch comic ID from hw2 endpoint
        const queryParams = new URLSearchParams({ email });
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?${queryParams}`);
        const data = await response.json();
        if (!data) {
          throw new Error('Comic ID not found in response');
        }

        const comicId = data;

        // Fetch comic details using the fetched comicId
        const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        const comicData = await comicResponse.json();

        setComicData(comicData);
      } catch (error) {
        console.error('Error fetching XKCD comic:', error);
      }
    };

    fetchComicData();
  }, [email]);

  return (
    <div className="xkcd-comic">
      {comicData.img && (
        <>
          <img src={comicData.img} alt={comicData.alt} />
          <p>Title: {comicData.safe_title}</p>
          <p>Date: {new Date(comicData.year, comicData.month - 1, comicData.day).toLocaleDateString()}</p>
        </>
      )}
    </div>
  );
};

export default XkcdComic;

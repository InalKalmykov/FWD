// components/Comic.js

import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Comic = () => {
  const [comicData, setComicData] = useState(null);

  useEffect(() => {
    const fetchComic = async () => {
      const res = await fetch('/api/comic');
      const data = await res.json();
      setComicData(data);
    };

    fetchComic();
  }, []);

  return (
    <section id="xkcd">
      <h2>Latest XKCD Comic</h2>
      <div id="comic-container">
        <img id="comic-img" src={comicData?.img} alt="XKCD Comic" />
        <div id="comic-info">
          <p id="comic-title">{comicData?.title}</p>
          <p id="comic-date">{comicData?.date}</p>
        </div>
      </div>
    </section>
  );
};

export default Comic;

import React, { useEffect } from 'react';

const Artist = ({ name, stars, id, image, artist, setArtists, artists }) => {
  const incrementHandler = () => {
    setArtists(
      artists.map((item) => {
        if (item.id === artist.id) {
          return { ...item, stars: stars + 1 };
        }
        return item;
      })
    );
  };

  const decrementHandler = () => {
    setArtists(
      artists.map((item) => {
        if (item.id === artist.id) {
          return { ...item, stars: stars - 1 };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const sorted = [...artists].sort((a, b) => b.stars - a.stars);
    console.log(sorted);
    setArtists(sorted);
  }, [artist]);

  return (
    <div className="artist">
      <img
        className="artist-image"
        src="https://www.erinhanson.com/Content/SiteImages/1-Erin-Hanson-Artist-Painting-Live.jpg"
        alt="artist"
      />
      <li className="artist-item">{name}</li>
      <li>{stars} stars</li>
      <button onClick={incrementHandler} className="increment-btn">
        <i className="fas fa-plus"></i>
      </button>
      <button onClick={decrementHandler} className="decrement-btn">
        <i className="fas fa-minus"></i>
      </button>
    </div>
  );
};

export default Artist;

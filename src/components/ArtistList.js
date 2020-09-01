import React from 'react';
import Artist from './Artist';

const ArtistList = ({ artists, setArtists }) => {
  return (
    <div className="artist-container">
      <ul className="artist-list">
        {artists.map((artist) => (
          <Artist
            setArtists={setArtists}
            artists={artists}
            name={artist.name}
            stars={artist.stars}
            key={artist.id}
            image={artist.image}
            artist={artist}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;

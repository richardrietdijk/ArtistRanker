import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ArtistList from './components/ArtistList';

function App() {
  const [inputText, setInputText] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Artist Ranker</h1>
      </header>
      <Form
        artists={artists}
        setArtists={setArtists}
        setInputText={setInputText}
        inputText={inputText}
      />
      <ArtistList setArtists={setArtists} artists={artists} />
    </div>
  );
}

export default App;

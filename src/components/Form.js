import React from 'react';
import uuid from 'react-uuid';

const Form = ({ inputText, setInputText, artists, setArtists }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitArtistHandler = (e) => {
    e.preventDefault();
    if (!inputText) {
      alert('Field cant be empty...');
    } else {
      setArtists([
        ...artists,
        { name: inputText, stars: 1, id: uuid(), image: '' },
      ]);
      setInputText('');
    }
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="artist-input"
      />
      <button
        onClick={submitArtistHandler}
        className="artist-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;

{
  /* <div className="select">
          <select name="artist" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */
}

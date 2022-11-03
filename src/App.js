import { useState } from 'react';

function App() {

  const [songs, setSongs] = useState([
    {
      title: "Mo Bamba",
      artist: "Sheck Wes",
      img_src: "./images/frank.jpg",
      src: "./music/Mobamba.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/tyler.jpg",
      src: "./music/Goosebumps.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/frank.jpg",
      src: "./music/Mobamba.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/tyler.jpg",
      src: "./music/Goosebumps.mp3"
    },

  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextCurrentSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
     app
    </div>
  );
}

export default App;

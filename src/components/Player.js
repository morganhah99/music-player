import React from 'react';



//this is the component where the music gets played
function Player() {
  return (
    <div className='c-player'>
      <audio></audio>
      <h4>Playing now</h4>
      {/* Details */}
      {/* Controls */}
      <p><strong>Next up:</strong>Kindest regard by Morgan Hah</p>
    </div>
  )
}

export default Player

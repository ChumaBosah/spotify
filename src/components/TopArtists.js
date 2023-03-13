import React from 'react';
import './TopArtists.css';
import { taylor } from '../images';
import { kanye } from '../images';
import { Drake } from '../images';

function TopArtists( {artist}) {
    console.log(artist);
  return (
    <div className='fav-artist'>
    <h2>Top Artists</h2>
    <div className='artist-info'>
    <div className='taylor'>
    <img src={taylor} id='taylor' />
   <h5>Taylor Swift</h5>
   </div>
   <div className='kanye'>
   <img src={kanye} id='kanye' />
   <h5>Kanye West</h5>
   </div>
   <div className='drake'>
   <img src={Drake} id='drake' />
   <h5>Drake</h5>
   </div>
    </div>
    </div>
      
  );
}

export default TopArtists;

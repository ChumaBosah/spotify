import React from 'react';
import { banner } from '../images';
import './Body.css'
import { useDataLayerValue } from './Datalayer';
import Header from './Header';
import { BsPlayCircleFill } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import SongRow from './SongRow';
import TopArtists from './TopArtists';

function Body({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (

    <div className='body'>
    <Header spotify={spotify} />

    <div className='body-info'>
    <h5 id='hot'>What's Hot 🔥</h5>
    </div>
    <div className='trend'>
      <h2>Trending</h2>
      <span className='more'>More</span>
    </div>
    <ul className='chill-hop'>
      <li id='chill'>❄️ Chill Hits</li>
      <li id='hip'>Hop</li>
    </ul>
    <ul className='accoustic-pop'>
      <li id='accoustic'>🎸 Accoustic</li>
      <li id='indie'>🎵 Indie Pop</li>
    </ul>
    <ul className='piano-jazz'>
      <li id='piano'>🎹 Piano Blues</li>
      <li id='jazz'>🎺 Jazz</li>
    </ul>
    <div className='artists'>
    
     <TopArtists />
     </div>
    <div className='banner'>
    <div className='img-cover'>
    <img src={banner} id='img-banner' />
    </div>
      <small className='artist'>Artist</small>
      <h2 className='on-top'>On Top </h2> 
      <h2 className='on-top-of'>Of The World </h2>
      <small id='listeners'>Monthly  Listeners</small>
      <small id='numerals'>.32.092</small>
    </div>
    <h1 id='jamzz' >My PlayLists</h1>
    <div className='song-icons'>
    <BsPlayCircleFill className='body-shuffle'/>
    <MdFavoriteBorder className='favorite'/>
    <FiMoreHorizontal className='_more'/>
    </div>
    <div className='songs'>
    {discover_weekly?.tracks.items.map(item => (
      <SongRow track={item.track} />
    ))}
    </div>
    </div>
  );
}

export default Body;

import React from 'react';
import './Footer.css'
import {BsRepeat} from 'react-icons/bs';
import {BsFillSkipBackwardFill} from 'react-icons/bs';
import {BsPlayCircleFill} from 'react-icons/bs';
import {BsSkipForwardFill} from 'react-icons/bs';
import {CiShuffle} from 'react-icons/ci';
import {BsVolumeDown} from 'react-icons/bs'
import {RxSlider} from 'react-icons/rx'
import {BsVolumeUp} from 'react-icons/bs'
import {RiPlayListLine} from 'react-icons/ri'
import { Sucka } from '../images';
import { useDataLayerValue } from './Datalayer';





function Footer({spotify}) {

  const [{ token, item, playing}, dispatch] = useDataLayerValue();


  return (
    <div className='footer'>
    <div className='footer-left'>
    <img src={item?.album.images[0].url} alt={item?.name} className='album-logo' />
    {item ? (
      <div className='song-info'>
        <h4>{item.name}</h4>
        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    ) : (
      <div className='song-info'>
        <h4>No song is playing</h4>
        <p>...</p>
      </div>
    )}
    </div>
      
      <div className='footer-center'>
      <div className='footer-icon'>
      <BsRepeat  id='repeat'/>
      <BsFillSkipBackwardFill  id='previous'/>
      <BsPlayCircleFill  id='play'/>
      <BsSkipForwardFill id='next'/>
      <CiShuffle  id='shuffle'/>
      </div>
      </div>

      <div className='footer-right'>
     <div className='right-icons'>
     <RiPlayListLine id='list'/>
      <BsVolumeDown id='down'/>
      <RxSlider id='slide'/>
      <BsVolumeUp id='up'/>
     </div>
      </div>
      
    </div>
  );
}

export default Footer;

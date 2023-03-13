import React from 'react';
import './Header.css'
import {BsSearch} from 'react-icons/bs'

function Header() {
  return (
    <div className='header'>
    <div className='header-search'>
    <BsSearch />
    <input type={'search'} placeholder={'Search for artist, songs and ...'} id='input' />
    </div>
    <div className='shortcuts'>
    <h3 id='shortcuts'>Shortcuts</h3>
    </div>
    
    
      
    </div>
  );
}

export default Header;

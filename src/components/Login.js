import React from 'react';
import './Login.css'
import { Spotify_Black } from '../images';
import { loginUrl } from '../spotify';


function Login() {
  return (
    <div className='login'>
    <img src= {Spotify_Black } className='logo'/> 
    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

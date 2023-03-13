import React from 'react';
import './Sidebar.css'
import { Spotify_Black } from '../images';
import SidebarOptions from './SidebarOptions';
import {BiHomeAlt} from 'react-icons/bi'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ExploreIcon from '@material-ui/icons/Explore';
import { useDataLayerValue } from '../components/Datalayer';




function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);

    
  return (
    <div className='sidebar'>
    <img src= {Spotify_Black } className='logo' /> 
   <SidebarOptions Icon={BiHomeAlt} title='Home'/>
   <SidebarOptions Icon={TrendingUpIcon} title='Trend' />
   <SidebarOptions Icon={ExploreIcon} title='Feed' />
   <br />
   <strong className='sidebar-title'>PLAYLISTS</strong>
   <hr />

   {playlists ?.items?.map(playlist => (
   <SidebarOptions title={playlist.name} /> 
   ))}
   
   

   </div>
  );
}

export default Sidebar;

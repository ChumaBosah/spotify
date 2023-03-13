import React from 'react';
import './SidebarOption.css'


function SidebarOptions({title,Icon}) {
  return (
    <div className='sidebarOption'>
    {/* {Icon && <Icon className="sideOption-icon" />} */}
   {Icon ? <h5>{title}</h5> : <p>{title}</p>}
      
    </div>
    );
  
}

export default SidebarOptions; 
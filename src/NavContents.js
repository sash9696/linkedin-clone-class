import { Avatar } from '@material-ui/core';
import React from 'react';
import './NavContents.css'


function NavContents({Icon, title, avatar}) {
  return (<div className='navContents_container'>
            {Icon && <Icon className='navContents_icon'/> }
          
            {avatar && <Avatar/>}
            <h3>{title}</h3>
        </div>);
}

export default NavContents;

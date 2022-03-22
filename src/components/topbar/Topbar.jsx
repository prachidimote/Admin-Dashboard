import React from 'react'
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
            <span className='logo'>Iamadmin</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                
                <NotificationsNoneIcon/>
                <span className='topIconBadge'>0</span>
        
        </div>
        <div className='topbarIconContainer'>
                
                <LanguageIcon />
                
        
        </div>
        <div className='topbarIconContainer'>
                
                <SettingsIcon />
                
        
        </div>
        <img src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' alt='' className='topAvatar'/>
        </div>
        </div>
    </div>
  )
}

export default Topbar
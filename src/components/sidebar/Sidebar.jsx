import React from 'react'
import './sidebar.css'
// import LineStyleIcon from '@mui/icons-material/LineStyle';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// import ReportIcon from '@mui/icons-material/Report';
import {LineStyle, 
  Timeline,
  TrendingUp, 
  PermIdentity, 
  Storefront,
  AttachMoney,
  AssessmentOutlined,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  CalendarTodayOutlined,
  Report



} from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon'/>
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon'/>
              Sales
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity/>
              Users
            </li>
            <li className="sidebarListItem">
              <Storefront/>
              Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoney/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <AssessmentOutlined/>
              Reports
            </li>
          </ul>
        </div> 

<div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline/>
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline/>
              Messages
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CalendarTodayOutlined/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report/>
              Reports
            </li>
          </ul>
        </div>

        

      </div>
    </div>
 
  )
}

export default Sidebar
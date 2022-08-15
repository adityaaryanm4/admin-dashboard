import React from 'react'
import "./sidebar.scss"
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <div className="logo">karaadmin</div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className='icon' /><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li><PersonIcon className='icon' /><span>Users</span></li>
          </Link>
          <li><StoreMallDirectoryIcon className='icon' /><span>Products</span></li>
          <li><CreditCardIcon className='icon' /><span>Orders</span></li>
          <li><LocalShippingIcon className='icon' /><span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><InsertChartIcon className='icon' /><span>Stats</span></li>
          <li><NotificationsActiveIcon className='icon' /><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><SettingsSystemDaydreamOutlinedIcon className='icon' /><span>System Health</span></li>
          <li><PsychologyOutlinedIcon className='icon' /><span>Logs</span></li>
          <li><SettingsApplicationsIcon className='icon' /><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className='icon' /><span>Profile</span></li>
          <li><ExitToAppOutlinedIcon className='icon' /><span>Logout</span></li>

        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
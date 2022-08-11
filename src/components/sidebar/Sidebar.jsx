import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <div className="logo">karaadmin</div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li><DashboardIcon /><span>Dashboard</span></li>
          <li><PersonIcon /><span>Users</span></li>
          <li><StoreMallDirectoryIcon /><span>Products</span></li>
          <li><CreditCardIcon /><span>Orders</span></li>
          <li><LocalShippingIcon /><span>Delivery</span></li>
          <li><InsertChartIcon /><span>Stats</span></li>
          <li><NotificationsActiveIcon /><span>Notifications</span></li>
          <li><span>dashboard</span></li>
          <li><span>dashboard</span></li>
          <li><span>dashboard</span></li>

        </ul>
      </div>
      <div className="bottom">dark/light theme</div>
    </div>
  )
}

export default Sidebar
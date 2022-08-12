import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">500</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <span><KeyboardArrowUpIcon />4%</span>
        <span><PersonIcon /></span>
      </div>
    </div>
  )
}

export default Widget
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../styles/Sidebar.css";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__icon">
        <span className="active">
          <HomeIcon />
          <p>Dashboard</p>
        </span>
        <span>
          <PeopleIcon />
          <p>Send/receive money</p>
        </span>
        <span>
          <PhoneAndroidIcon />
          <p>buy airtime &amp; mobile data</p>
        </span>
        <span>
          <ThreeSixtyIcon />
          <p>pay bills</p>
        </span>
        <span>
          <MoreHorizIcon />
          <p>more</p>
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;

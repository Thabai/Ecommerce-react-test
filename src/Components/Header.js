import React from "react";
import Trustpilot from '../img/Trustpilot.png'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import '../App.css'


const Header = () => {

    return (
      <div>
        <img src={Trustpilot} alt="Trustpilot" />
        <div className="font">
          <a>
            <LocationOnOutlinedIcon />
            Shop by School
          </a>
          <a>
            <CalendarTodayOutlinedIcon />
            Book Appointment
          </a>
          <a>
            <CallOutlinedIcon />
            Contact Store
          </a>
          <a>
            <AccountCircleOutlinedIcon />
          </a>
          <a>
            <FavoriteBorderOutlinedIcon />
          </a>
          <a>
            <LocalMallOutlinedIcon />
          </a>
        </div>
      </div>
    );
};

export default Header;
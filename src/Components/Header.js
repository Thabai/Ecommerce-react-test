import React from "react";
import Trustpilot from '../img/Trustpilot.png'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import '../App.css';
import styled from "styled-components";


const Header = () => {

    return (
      <div className="header">
        <img className="trust" src={Trustpilot} alt="Trustpilot" />
        <Container className="font">
          <Tabs>
            <LocationOnOutlinedIcon />
            Shop by School
          </Tabs>
          <Tabs>
            <CalendarTodayOutlinedIcon />
            Book Appointment
          </Tabs>
          <Tabs>
            <CallOutlinedIcon />
            Contact Store
          </Tabs>
          <Tabs>
            <AccountCircleOutlinedIcon />
          </Tabs>
          <Tabs>
            <FavoriteBorderOutlinedIcon />
          </Tabs>
          <Tabs>
            <LocalMallOutlinedIcon />
          </Tabs>
        </Container>
      </div>
    );
};

export default Header;

const Tabs = styled.a`
  text-decoration: none;
  padding-right: 20px;
`;
const Container = styled.div`
  margin: 10px;
`;

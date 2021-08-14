import React from "react";
import Logo from '../img/clive-mark-logo.svg';
import styled from 'styled-components';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "../App.css";

const Nav = () => {

    return (
      <Navi>
        <Container className="font">
          <LogoMain>
            <img src={Logo} alt="Clive Mark" />
          </LogoMain>
          <Links>
            <Tabs>Shirts & Blouses</Tabs>
            <Tabs>Skirts</Tabs>
            <Tabs>Trousers</Tabs>
            <Tabs>Blazers</Tabs>
            <Tabs>Sportswear</Tabs>
            <Tabs>Accessories</Tabs>
            <Tabs>
              More
              <ExpandMoreOutlinedIcon />
            </Tabs>
          </Links>
          <Bag>
            <LocalMallOutlinedIcon />
            <MenuOutlinedIcon />
          </Bag>
        </Container>
        <ButtonH>
          <Button>
            <SearchOutlinedIcon />
          </Button>
        </ButtonH>
      </Navi>
    );
};

export default Nav;

const Links = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Button = styled.button`
background-color: transparent;
border-color: transparent;
color: white;
width: 100%;
margin: 30px;
`

const ButtonH = styled.button`
  border-color: transparent;
  display: flex;
  border-bottom: 12vh solid darkblue;
  border-left: 5vw solid rgb(250, 249, 249);
  height: 0;
  width: 15%;

  @media screen and (max-width: 1000px) {
  width: 30%;
  }
`;

const Navi = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(250, 249, 249);
  box-shadow: -150px 2px lightgrey;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const LogoMain = styled.div`
  height: 25%;
  width: 25%;
  padding: 30px;

  @media screen and (max-width: 1000px) {
  width: 40%;
  padding: 0px;
  margin: auto;
  }
`;

const Tabs = styled.a`
  text-decoration: none;
`;

const Bag = styled.div`
  display: none;
  width: 25%;
  padding-right: 10px;
  margin: 30px auto;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
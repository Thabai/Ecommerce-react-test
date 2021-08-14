import React from "react";
import Logo from '../img/clive-mark-logo.svg';
import styled from 'styled-components';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
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
margin: auto 0;
`
const Button = styled.button`
background-color: transparent;
border-color: transparent;
color: white;
width: 100px;
margin: 20px;
`

const ButtonH = styled.button`
  border-color: transparent;
  display: flex;
  border-bottom: 75px solid darkblue;
  border-left: 50px solid rgb(250, 249, 249);
  height: 0;
  width: 150px;
`;

const Navi = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: rgb(250, 249, 249);
  box-shadow: -150px 2px lightgrey;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LogoMain = styled.div`
  height: 20px;
  width: 250px;
  padding: 30px;
`;

const Tabs = styled.a`
  text-decoration: none;
  padding-right: 50px;
  padding-left: 20px;
`;
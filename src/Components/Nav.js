import React from "react";
import Logo from '../img/clive-mark-logo.svg';
import styled from 'styled-components';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


const Nav = () => {

    return (
      <div className="font">
        <img src={Logo} alt="Clive Mark" />
        <Links>
          <a>Shirts & Blouses</a>
          <a>Skirts</a>
          <a>Trousers</a>
          <a>Blazers</a>
          <a>Sportswear</a>
          <a>Accessories</a>
          <a>
            More
            <ExpandMoreOutlinedIcon />
          </a>
        </Links>
        <ButtonH>
          <Button>
            <SearchOutlinedIcon />
          </Button>
        </ButtonH>
      </div>
    );
};

export default Nav;

const Links = styled.div`
text-transform: uppercase;
`
const Button = styled.button`
background-color: transparent;
border-color: transparent;
color: white;
`

const ButtonH = styled.button`
background-color: darkblue;
border-color: transparent;
`
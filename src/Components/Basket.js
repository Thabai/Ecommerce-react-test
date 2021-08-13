import React from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import styled from "styled-components";
import "../App.css";

const Basket = () =>  {
  return (
      <Container>
        <Counter>
          <button className="fontL"> - </button>
          <span className="CartItem-count"> 1 </span>
          <button className="fontL"> + </button>
        </Counter>
        <BasketAdd> Add to Basket </BasketAdd>
        <BlueDiv> <FavoriteBorderOutlinedIcon className="font"/> </BlueDiv>
        </Container>
  );
}


export default Basket;

const Container = styled.div`
display: flex;
text-align: center;
padding: 10px;
width: 500px;
justify-content: space-evenly;
`;

const Counter = styled.div`
  background: white;
  border: 0.5px solid lightgrey;
  padding: 10px;
  width: 100px;
`;

const BasketAdd = styled.button`
color: white;
background: #264f9d;
border: none;
padding: 10px;
width: 250px;
`;

const BlueDiv = styled.div`
background: #d6edf8;
width: 50px;
padding-top: 10px;
`;
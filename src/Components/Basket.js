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
      <BlueDiv>
        <FavoriteBorderOutlinedIcon className="font" />
      </BlueDiv>
      <BasketAdd> Add to Basket </BasketAdd>
      <BlueDiv2>
        <FavoriteBorderOutlinedIcon className="font" />
      </BlueDiv2>
    </Container>
  );
}


export default Basket;

const Container = styled.div`
  display: flex;
  text-align: center;
  padding: 10px;
  width: 500px;
  justify-content: space-between;

  @media screen and (max-width: 1500px) {
    width: 85%;
    padding: 0px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    margin: 30px 50px;
    width: 40%;
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
    margin: auto;
    width: 80%;
  }
`;

const Counter = styled.div`
  display: flex;
  background: white;
  border: 0.5px solid lightgrey;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const BasketAdd = styled.button`
  color: white;
  background: #264f9d;
  border: none;
  padding: 10px;
  width: 300px;
  text-transform: uppercase;


  @media screen and (max-width: 1000px) {
    margin: auto;
    width: 300px;
  }
`;

const BlueDiv = styled.div`
  background: #d6edf8;
  width: 50px;
  padding: 10px;
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    margin: 0 auto;
  }
`;

const BlueDiv2 = styled.div`
  background: #d6edf8;
  width: 50px;
  padding-top: 20px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
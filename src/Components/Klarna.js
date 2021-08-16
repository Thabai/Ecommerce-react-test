import React from 'react'
import styled from 'styled-components';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

const Klarna = () => {

    return (
      <BlueDiv>
        <Cont>
          <P><CreditCardOutlinedIcon className="fontL" /></P>
          <P> Make 3 payments of £9.99 with <a className="font">Klarna</a></P>
        </Cont>
        <Cont>
        <P><LocalShippingOutlinedIcon className="fontL" /> </P>
        <P> Free Delivery Over £50</P>
        </Cont>
      </BlueDiv>
    );
};

export default Klarna;

const BlueDiv = styled.div`
  background: #d6edf8;
  width: 80%;
  padding: 10px;
  justify-contents: space-between;
  font-size: 25px;

  @media screen and (max-width: 1000px) {
    width: 75%;
    margin: 50px;
    text-align: center;
    padding-left: 20px;
  }

  @media screen and (max-width: 600px) {
    .sections {
      width: 90%;
      margin: auto;
      text-align: center;
      font-size: 15px;
    }
  }
`;

const Cont = styled.div`
  display: flex;
`;
const P = styled.p`
  padding: 10px;
  @media screen and (max-width: 600px) {
    padding: 5px;
  }
`;

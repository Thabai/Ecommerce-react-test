import React from 'react'
import styled from 'styled-components';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

const Klarna = () => {

    return (
      <BlueDiv>
        <p>
          <CreditCardOutlinedIcon className="fontL" />
          Make 3 payments of £9.99 with <a className="font">Klarna</a>
        </p>
        <p>
          <LocalShippingOutlinedIcon className="fontL" />
          Free Delivery Over £50
        </p>
      </BlueDiv>
    );
};

export default Klarna;

const BlueDiv = styled.div`
  background: #d6edf8;
`;
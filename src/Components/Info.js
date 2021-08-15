import React from 'react'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import styled from 'styled-components';

const Info = () => {

    return (
      <Container>
        <h2 className="font">Aldridge School Girls Blazer</h2>
        <Price>
          <P className="fontL">£29.99</P>
          <PriceIcon>
            <InsertChartOutlinedIcon className="fontL" />
            Compare Prices
          </PriceIcon>
        </Price>
      </Container>
    );
};

export default Info;

const Container = styled.div`
  padding-left: 15px;

  @media screen and (max-width: 1000px) {
    margin: 0 40px;
    position: relative;
    top: -100vh;
    left: 40px;
    padding-left: 0px;
  }
  @media screen and (max-width: 700px) {
    position: relative;
    top: -60vh;
    left: 20px;
    padding-left: 0px;
  }
`;

const Price = styled.div`
display: flex;
`

const P = styled.p`
  padding-right: 10px;
  font-size: 25px;
  font-weight: 600;
`;


const PriceIcon = styled.div`
  margin: 5px ;
  padding-bottom: 20px;
`;

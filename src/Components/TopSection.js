import Gallery from "./Gallery"
import Info from "./Info";
import Klarna from "./Klarna";
import Choice from "./Choices"
import Basket from "./Basket";
import styled from "styled-components";
  
const TopSection = () => {

    return (
      <Container>
        <InfoDiv>
          <Info />
        </InfoDiv>
        <Gal>
          <Gallery />
        </Gal>
        <Right>
          <InfoDiv2>
            <Info />
          </InfoDiv2>
          <Klarna />
          <Choice />
          <Basket />
        </Right>
      </Container>
    );
};

export default TopSection;


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 25px;
  font-weight: 600;
  width: 100%;

  @media screen and (max-width: 1000px) {
    display: block;
    grid-template-columns: none;
  }
`;

const Gal = styled.div`
  display: block;

  @media screen and (max-width: 1000px) {
    padding-left: 15px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 0px;
  }
`;

const InfoDiv = styled.div`
  display: block;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  padding-left: 20px;

  @media screen and (max-width: 600px) {
    padding-left: 5px;
  }
  @media screen and (min-width: 1000px) {
    display: none !important;
  }
`;

const InfoDiv2 = styled.div`
  display: block;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  padding-left: 30px;

  @media screen and (max-width: 1500px) {
    padding-left: 0px;
    font-size: 20px;
  }
  @media screen and (max-width: 1000px) {
    display: none !important;
  }
`;

const Right = styled.div`
  display: block;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  padding-left: 60px;

  @media screen and (max-width: 1000px) {
    padding-left: 10px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 0px;
  }
`;
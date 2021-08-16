import React from 'react';
import Payment from "../img/payment-providers.svg";
import Providers from "../img/product-suppliers.svg";
import styled from 'styled-components';

const Contact = () => {

return (
  <div>
    <Line></Line>
    <Container>
      <ContactUs>
        <H3C>Contact Us</H3C>
        <Main>
          <div>
            <p>Place Name</p>
            <Num>00000000</Num>
          </div>
          <div>
            <p>Place Name</p>
            <Num>00000000</Num>
          </div>
          <div>
            <p>Place Name</p>
            <Num>00000000</Num>
          </div>
          <div>
            <p>Place Name</p>
            <Num>00000000</Num>
          </div>
          <div>
            <p>Place Name</p>
            <Num>00000000</Num>
          </div>
          <div>
            <p>Place Name</p>
            <Num>00000000</Num>
          </div>
        </Main>
        <Emails>
          <div>
            <p>Email Contact</p>
            <Num>email@email.com</Num>
          </div>
          <div>
            <p>Email Contact</p>
            <Num>email@email.com</Num>
          </div>
        </Emails>
      </ContactUs>
      {/* //other section// */}
      <Other>
        <IconDiv>
          <Pay>
            <H3>Ways to pay</H3>
            <img src={Payment} />
          </Pay>
          <Provider>
            <H3>Our providers</H3>
            <img src={Providers} />
          </Provider>
        </IconDiv>
        <LinkContainer>
          <H3>Links</H3>
          <LinkDiv>My Account</LinkDiv>
          <LinkDiv>Order History</LinkDiv>
          <LinkDiv>Book an Appointment</LinkDiv>
          <LinkDiv>Fitting Guides</LinkDiv>
          <LinkDiv>Shop by School</LinkDiv>
          <LinkDiv>Plain Schoolwear</LinkDiv>
        </LinkContainer>
        <LinkContainer>
          <H3>Information</H3>
          <LinkDiv>About</LinkDiv>
          <LinkDiv>Contact Us</LinkDiv>
          <LinkDiv>Our Stores</LinkDiv>
          <LinkDiv>Delivery</LinkDiv>
          <LinkDiv>Cancellations</LinkDiv>
          <LinkDiv>Privacy Policy</LinkDiv>
          <LinkDiv>Terms & Conditions</LinkDiv>
        </LinkContainer>
      </Other>
    </Container>
    <Footer>C Morris 2021</Footer>
  </div>
);

}

export default Contact;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background: white;

`;

const Container = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const ContactUs = styled.div`
  display: block;
  width: 40%;
  text-align: left;
  padding: 40px;
  background: #d1eaf7;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const H3 = styled.h3`
  padding-bottom: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #264f9d;
  @media screen and (max-width: 1500px) {
  font-size: 20px;
  }
`;

const H3C = styled.h3`
  padding-bottom: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #264f9d;
  padding-left: 20px;

  @media screen and (max-width: 1500px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1000px) {
    padding-left: 0px;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
`;

const Emails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
`;

const Other = styled.div`
  display: flex;
  text-align: left;
  padding: 40px;
  width: 60%;
  justify-content: space-evenly;
  background: #9bc9e0;

  @media screen and (max-width: 1000px) {
    display: block;
    width: 100%;
    padding: 50px;
  }
`;

const IconDiv = styled.div`
  @media screen and (min-width: 1000px) {
    width: 50%;
  }
`;


const Pay = styled.div`
  display: block;
  width: 60%;
  padding-left: 20px;
  padding-bottom: 70px;
`;

const Provider = styled.div`
  display: block;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: block;
  width: 60%;
  padding-left: 30px;
  padding-bottom: 40px;

  @media screen and (min-width: 1000px) {
    width: 25%;
  }
`;

const LinkDiv = styled.div`
  display: block;
  padding-bottom: 20px;
`;

const Num = styled.p`
  color: rgb(99, 75, 122);
  font-weight: 700;
`;


const Footer = styled.div`
  width: 100%;
  margin: auto;
  display: block;
  text-align: center;
  background: rgb(99, 75, 122);
  color:white;
  padding: 20px;
`;



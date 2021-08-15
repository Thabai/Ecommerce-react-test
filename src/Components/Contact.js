import React from 'react';
import Payment from "../img/payment-providers.svg";
import Providers from "../img/product-suppliers.svg";
import styled from 'styled-components';

const Contact = () => {

return (
  <div>
    <Container>
      <ContactUs>
        <H3>Contact Us</H3>
        <Main>
          <div>
            <p>Place Name</p>
            <p>00000000</p>
          </div>
          <div>
            <p>Place Name</p>
            <p>00000000</p>
          </div>
          <div>
            <p>Place Name</p>
            <p>00000000</p>
          </div>
          <div>
            <p>Place Name</p>
            <p>00000000</p>
          </div>
          <div>
            <p>Place Name</p>
            <p>00000000</p>
          </div>
          <div>
            <p>Place Name</p>
            <p>00000000</p>
          </div>
        </Main>
        <Emails>
          <div>
            <p>Email Contact</p>
            <p>email@email.com</p>
          </div>
          <div>
            <p>Email Contact</p>
            <p>email@email.com</p>
          </div>
        </Emails>
      </ContactUs>
      {/* //other section// */}
      <Other>
        <div>
          <Pay>
            <H3>Ways to pay</H3>
            <img src={Payment} />
          </Pay>
          <Provider>
            <h3>Our providers</h3>
            <img src={Providers} />
          </Provider>
        </div>
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
  width: 50%;
  text-align: left;
  padding: 40px;
  background: #9bc9e0;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const H3 = styled.h3`
  padding-left: 20px;
  padding-bottom: 20px;

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
  width: 50%;
  justify-content: space-evenly;

  @media screen and (max-width: 1000px) {
    display: block;
    width: 100%;
    padding: 50px;
  }
`;

const Pay = styled.div`
  display: block;
  width: 60%;
  padding-left: 20px;
  padding-bottom: 40px;
`;

const Provider = styled.div`
  display: block;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: block;
  width: 60%;
  padding-left: 20px;
  padding-bottom: 40px;
`;

const LinkDiv = styled.div`
  display: block;
  padding-bottom: 10px;
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



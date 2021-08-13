import React from 'react';
import Payment from "../img/payment-providers.svg";
import Providers from "../img/product-suppliers.svg";

const Contact = () => {

return (
  <div>
    <div>
      <h3>Contact Us</h3>
      <ul>
        <li>
          Place Name <span>00000000</span>
        </li>
        <li>
          Place Name <span>00000000</span>
        </li>
        <li>
          Place Name <span>00000000</span>
        </li>
        <li>
          Place Name <span>00000000</span>
        </li>
        <li>
          Place Name <span>00000000</span>
        </li>
        <li>
          Place Name <span>00000000</span>
        </li>
        <li>
          Enquiries <span>email@email.co.uk</span>
        </li>
        <li>
          Enquiries <span>email@email.co.uk</span>
        </li>
      </ul>
    </div>
    {/* //other section// */}
    <div>
      <div>
        <h3>Ways to pay</h3>
        <img src={Payment} />

        <h3>Our providers</h3>
        <img src={Providers} />
      </div>
      <div>
        <h3>Links</h3>
        <a>My Account</a>
        <a>Order History</a>
        <a>Book an Appointment</a>
        <a>Fitting Guides</a>
        <a>Shop by School</a>
        <a>Plain Schoolwear</a>
      </div>
      <div>
        <h3>Information</h3>
        <a>About</a>
        <a>Contact Us</a>
        <a>Our Stores</a>
        <a>Delivery</a>
        <a>Cancellations</a>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
      </div>
    </div>
    <footer>C Morris 2021</footer>
  </div>
);

}

export default Contact;
import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Titlenav from './Components/TitleNav';
import Info from './Components/Info';
import Klarna from './Components/Klarna';
import Choice from './Components/Choices';
import Basket from './Components/Basket';
import Gallery from './Components/Gallery';
import Tabs from './Components/Accordion';
import Contact from './Components/Contact';
import "./App.css";

const App = () => {

return (
  <div className="body">
    <Header />
    <Nav />

    <div className="sections">
      <Titlenav />
      <Info />
      <Gallery />
      <Klarna />
      <Choice />
      <Basket />
    </div>
    <div>
      <Tabs />
    </div>
      <Contact />
  </div>
);

};

export default App;

import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Titlenav from './Components/TitleNav';
import Info from './Components/Info';
import Klarna from './Components/Klarna';
import Choice from './Components/Choices';
import Basket from './Components/Basket';
import Gallery from './Components/Gallery';
import Tabs from './Components/Tabs';

const App = () => {

return (
  <div>
    <Header />
    <Nav />

    <div>
      <Titlenav />
      <Info />
      <Gallery />
      <Klarna />
      <Choice />
      <Basket />
    </div>
    <div>
      <Tabs/>
    </div>
  </div>
);

};

export default App;

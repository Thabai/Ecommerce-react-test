import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Titlenav from './Components/TitleNav';
import TopSection from './Components/TopSection';
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
      <TopSection/>
    </div>
    <div className="tabsApp">
      <Tabs />
    </div>
    <Contact />
  </div>
);
};

export default App;

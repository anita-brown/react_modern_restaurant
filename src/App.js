import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, TablePage, Intro, Laurels, SpecialMenu } from "./container";
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* <Question4 /> */}
    {/* <Chef /> */}
    {/* <TablePage /> */}
    {/* <Intro /> */}
    {/* <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
  </div>
);

export default App;

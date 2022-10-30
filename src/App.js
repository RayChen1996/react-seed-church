 
import './App.css';
import React from 'react';
import Header from './Component/header'
import Banner from './Component/DailyBanner'
import Slogan from './Component/slogan';
import DailyBanner from './Component/DailyBanner';
import AboutChurch from './Component/AboutChurch'
import SchTable from './Component/SchTable';
import NameCard from './Component/NameCard'
import HistoryCard from './Component/HistoryCard';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">

      <Header/>

      <Slogan/>

      <DailyBanner />



      <AboutChurch/>


      <HistoryCard />
      <SchTable/>

      <NameCard />


      <Footer/>


    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrincipalComponent from './components/principal';
import BodyComponent from './components/body';
import { FaMouse, FaArrowDown } from 'react-icons/fa';
import PortfolioComponent from './components/portafolio';
import Prismic from '@prismicio/client';

const App = () => {
  const apiEndpoint = 'https://kmacho-portofolio.cdn.prismic.io/api/v2';
  const [aboutMe, setAboutMe] = useState();
  const [avatar, setAvatar] = useState();
  const [portofolio, setPortofolio] = useState();
  const Client = Prismic.client(apiEndpoint);

  const fetchProfile = async () => {
    let about = []
    let portofolio = []
    let avatar = logo;
    const response = await Client.query(
      Prismic.Predicates.at('document.tags', ['cv'])
    );
    if (response) {
      const result = response.results[0];
      about = result.data.about_me.map(e => { return e.text });
      avatar = result.data.avatar.url;
      portofolio = result.data.portafolio;

    }
    return { about, avatar, portofolio }
  };
  useEffect(() => {
    fetchProfile().then(e => {
      setAboutMe(e.about)
      setAvatar(e.avatar)
      setPortofolio(e.portofolio)
      console.log("adada", e.about)
    })
  }, [])
  useEffect(() => {
    console.log("adada", aboutMe)
  }, [aboutMe])
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div id="header" className="App-Content">
        <PrincipalComponent avatar={avatar} />
      </div>
      <div className="scroll-btn">
        <a href="#about">
          <FaArrowDown />
          <br></br>
          <FaMouse size="2em" />
        </a>
      </div>
      <div id="about" className="App-body">
        <BodyComponent paragraph={aboutMe} />
      </div>
      <div className="scroll-btn">
        <a href="#portafolio">
          <FaArrowDown />
          <br></br>
          <FaMouse size="2em" />
        </a>
      </div>
      <div className="bg-2"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div id="portafolio" className="App-body-flow">
        <PortfolioComponent portofolio={portofolio} />
      </div>
    </div>
  );
};

export default App;

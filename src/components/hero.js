import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import HeroPhoto from './galleryImgs/profile.jpg'
import './hero.css';


function Hero() {
  return (
    <div id='hero' className="hero-page">
      <div className="text-wrapper">
        <h1>Leal Tattoo Artist</h1>
        <p>Pracuje z pełnym zaangażowaniem i już od pierwszych rozmów o projekcie tatuażu dokładam wszelkich starań, żeby efekt finalny był jak najlepszy.</p>
      </div>
      <div className="photo-wrapper">
        <div className="hero-photo"  style={{ backgroundImage: `url(${HeroPhoto})` }} ></div>
      </div>
    </div>
  );
}

export default Hero;

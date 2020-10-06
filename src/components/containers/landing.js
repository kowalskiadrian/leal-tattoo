import React, { useRef, useEffect } from 'react';
import Hero from '../hero';
import Gallery from '../gallery';
import GalleryItem from '../galleryItem';
import ContactBar from '../contactbar';
import images from '../images'

import gsap from 'gsap';
import './landing.css';


function Landing() {

  useEffect(() => {
    console.log(images);
  });

  return (
    <div id='landing' className="landing-page">
      <Hero/>
      <ContactBar/>
      <Gallery>
          {images.map((item) => <GalleryItem key={item.id} src={item.src}/>)}
      </Gallery>
      <ContactBar/>
    </div>
  );
}

export default Landing;

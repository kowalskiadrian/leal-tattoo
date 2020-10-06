import React, { useRef, useEffect, useState } from 'react';
import { ReactComponent as Illustration } from './illustration.svg';
import gsap from 'gsap';
import './intro.css';


function Intro() {

  const [visible, setVisible] = useState(true);
  const intro = useRef(null);

  useEffect(() => {
    const [elements, text] = intro.current.children;
    const landing = document.getElementById("landing");

    const background = elements.getElementById('bg');
    const bgDots = elements.getElementById('bgdots');
    const bgLines = elements.getElementById('bglines');
    const unicorn = elements.getElementById('unicorn');

    gsap.set([background, ...bgDots.children, ...bgLines.children, unicorn, text], {autoAlpha: 0});
    gsap.set(background, {transformOrigin: '50% 50%'});
    gsap.set(text, {transformOrigin: '50% 50%'});

    const timeline = gsap.timeline({defaults: {ease: 'power3.inOut'}});
    timeline.fromTo(unicorn, {x: '+=800'}, {x: '-=800', autoAlpha: 1, duration: 2})
            .fromTo(background, {scale: 0.7}, {scale: 1, autoAlpha: 1, duration: 1})
            .to(elements, {scale: 1.3, duration: 0.5})
            .to(elements, {rotationY: '-=360', scale: 1, duration: 1})
            .to([bgDots.children, bgLines.children ], {autoAlpha: 1, duration: 0.5, stagger: 0.1})
            .fromTo(text, {scaleX: 0},{scaleX: 1, autoAlpha: 1, duration: 1})
            .call(() => {landing.scrollIntoView();}, this, '+=1')
            .call(() => {setVisible(false);}, this, '+=0.5');

  });

  return (
    <div ref={intro} className={`intro-section ${visible ? "" : "hidden-intro"}`}>
        <Illustration/>
        <span id="intro-text" className="intro-text">
          <h1>Leal Tattoo</h1>
        </span>
    </div>
  );
}

export default Intro;

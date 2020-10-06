import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './gallery.css';

function Gallery({children}) {

  const gallery = useRef(null);

  const scroll = ( direction ) => {
    let dest = (gallery.current.offsetWidth) * direction;
    let { scrollLeft } = gallery.current;
    let pos = scrollLeft + dest;
    gallery.current.scrollLeft = pos;
    console.log(scrollLeft);

  }

  return (
    <div id='gallery' className="gallery">
      <h1>Galeria</h1>
      <div className="gallery-wrapper">
        <a className="prev" onClick={() => {scroll(-1)}}>&#10094;</a>
          <div ref={gallery} className="gallery-items">
            {children}
          </div>
        <a className="next" onClick={() => {scroll(1)}}>&#10095;</a>
      </div>
    </div>
  );
}

export default Gallery;

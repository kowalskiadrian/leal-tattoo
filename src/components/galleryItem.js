import React from 'react';
import './galleryItem.css';

function GalleryItem({src}) {
  return (
    <div id='gallery-item' className="gallery-item">
        {console.log(src)}
        <div className="gallery-item-wrapper" style={{ backgroundImage: `url(${src})` }}/>
    </div>
  );
}

export default GalleryItem;

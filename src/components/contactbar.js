import React from 'react';
import './contactbar.css';

function ContactBar() {
  return (
    <div id='contact' className="contact-section">
      <div className="info">
        <span>Tel: +48 987 686 999</span>
        <span>Mail: kontakt@lealtattoo.pl</span>
      </div>
      <div className="social">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram-square"></i>
      </div>
    </div>
  );
}

export default ContactBar;



import React from "react";


function Footer() {
  return (
    <footer>
      <div class="footer-section ">
        <h3>Features</h3>
        <ul>
          <li><a href="#"><span class="span">Cool stuff</span></a></li>
          <li><a  href="#features">Random feature</a></li>
          <li><a  href="#features">Team feature</a></li>
        </ul>
      </div>
      <div class="footer-section ">
        <h3>Resources</h3>
        <ul>
          <li><a  href="#">Resource</a></li>
          <li><a  href="#">Resource name</a></li>
        </ul>
      </div>
      <div class="footer-section ">
        <h3>About</h3>
        <ul>
          <li><a  href="#">Team</a></li>
          <li><a  href="#">Locations</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;


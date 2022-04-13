import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <img src="main.png" className="flex l-10 w-20 mx-auto adjust-self-center" data-testid="footer-logo" />

    <p data-testid="footer-text">
      This project is made by <a href="https://jobdev.io">&copy; jobdev.io</a>
    </p>
  </footer>
);

export default Footer;

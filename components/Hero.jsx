import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Next.js Sample Project
    </h1>

    <p className="lead" data-testid="hero-lead">
      This site is still in development if you want to check Job's project just click on the link{' '}
      <a href="https://projects.jobdev.io">Full-Stack App</a>
      <a href="https://jobdecrypt.github.io">Github Pages</a>
    </p>
  </div>
);

export default Hero;

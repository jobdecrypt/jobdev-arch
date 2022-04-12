import React from 'react';

const Logo = ({ testId }) => (
  <figure className="flex flex-col z-20 shadow-2xl border rounded-full items-center">
    <img src="main.png" className="h-70 w-70 justify-center" alt="text" data-testId={testId} />
  </figure>
);

export default Logo;

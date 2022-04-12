import React from 'react';
import Image from 'next/image';

const Logo = ({ testId }) => (
  <figure className="" title="Next.js" data-testid={testId}>
    <Image src="/public/logos/main.jpg" layout="fill" alt="jobdev.io's logo" />
  </figure>
);

export default Logo;

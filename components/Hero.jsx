import React from 'react';
import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      <br />
      <br />
      <div>
        <p className="flex flex-col font-bold text-md color-gray-800 text-center prose">
          Hey guys! Welcome to my Landing Page. It's still in development/staging process and it's made with NextJS,
          TailwindCSS, GraphQL, MongoDB, Auth0 and coupled with AWS, Heroku, Digital Ocean, Firebase, Linode? and many
          more API connections and storage to implement soon. I just love making or building something with computer's
          and I'm still working on it... 🎹🚀
        </p>
      </div>
    </h1>

    <p className="lead" data-testid="hero-lead">
      This site is still in development so if you want to check my previous projects just click on the following
      links.💻 <br />
      <div className="m-8">
        <div className="inline-flex text-center align-middle space-x-8">
          <button
            type="submit"
            className="p-2 text-sm hover:text-md hover:border-2 hover:border-gray-500 hover:text-gray-800 bg-cyan-700/90  hover:bg-slate-100  text-teal-50 font-bold shadow-xl shadow-teal-500/60 border-0 rounded-md">
            <a href="https://projects.jobdev.io" className="pointer-events-none">
              Full-Stack App
            </a>
          </button>
          <button
            type="submit"
            className="p-2 text-sm hover:text-md hover:border-2 hover:border-gray-500 hover:text-gray-800 bg-cyan-700/90  hover:bg-slate-100  text-teal-50 font-bold shadow-xl shadow-teal-500/60 border-0 rounded-md">
            <a href="https://jobdecrypt.github.io" className="pointer-events-none">
              Github Pages
            </a>
          </button>
          <button
            type="submit"
            className="p-2 text-sm hover:text-md hover:border-2 hover:border-gray-500 hover:text-gray-800 bg-cyan-700/90  hover:bg-slate-100  text-teal-50 font-bold shadow-xl shadow-teal-500/60 border-0 rounded-md">
            <a href="https://jobdecrypt.github.io" className="pointer-events-none">
              Behance
            </a>
          </button>
        </div>
      </div>
      <marquee>
        <span className="z-5">
          🐞💻🐞... 🤺...... 🐞💾.. 🏃🏻.. <code className="bg-black text-white ">Esc + : + wq + return</code>{' '}
        </span>
      </marquee>
    </p>
  </div>
);

export default Hero;

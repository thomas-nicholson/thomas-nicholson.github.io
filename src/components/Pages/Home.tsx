import React from 'react';

const Home: React.FC = () => (
  <div className="container mx-auto p-4 lg:p-8 text-black bg-white">
    <h1 className="text-3xl lg:text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
    <p className="text-gray-700 mb-6">Intro or summary about yourself. I'm a software developer specialized in full-stack development, passionate about creating scalable and user-friendly applications.</p>
    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Skills</h2>
    <ul className="list-disc pl-5 mb-6">
      <li className="mb-2">JavaScript & TypeScript</li>
      <li className="mb-2">React, Vue, Angular</li>
      <li className="mb-2">Node.js, Express</li>
      <li className="mb-2">MongoDB, PostgreSQL</li>
    </ul>
    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Projects</h2>
    <p className="text-gray-700 mb-6">A brief overview of some key projects or achievements. Feel free to click on the Projects tab to explore in detail.</p>
    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Contact</h2>
    <p className="text-gray-700 mb-6">Feel free to reach out via the Contact page. I look forward to connecting with you!</p>
  </div>
);

export default Home;

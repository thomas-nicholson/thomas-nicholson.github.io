import React from 'react';

const Projects: React.FC = () => (
  <div className="container mx-auto p-4 lg:p-8 text-black bg-white">
    <h1 className="text-3xl lg:text-4xl font-bold mb-6">Projects</h1>
    <p className="text-gray-700 mb-6">Highlight some of your key projects here.</p>
    {/* Example Project */}
    <div className="mb-8">
      <img className="w-full lg:w-2/3 rounded" src="screenshot1.png" alt="Project 1" />
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Project Title 1</h2>
      <p className="text-gray-700 mb-4">Description of Project 1</p>
      <a href="https://github.com/username/project1" className="text-blue-500 mr-4" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <a href="https://demo.project1.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">Demo</a>
    </div>
    {/* You can loop through your projects and display them similarly */}
  </div>
);

export default Projects;

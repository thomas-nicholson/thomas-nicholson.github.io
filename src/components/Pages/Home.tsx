
import React from 'react';

const Home: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Thomas Nicholson</h1>
        <p className="text-xl text-gray-600">Full-Stack Software Developer</p>
      </div>
      
      <div className="space-y-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate software developer with expertise in building scalable web applications.
            My focus is on creating elegant solutions that solve real-world problems while maintaining
            clean, maintainable code.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">GitHub Activity</h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
            <div className="w-full flex justify-center">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=thomas-nicholson&show_icons=true&theme=transparent" 
                alt="GitHub stats"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full flex justify-center">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=thomas-nicholson&theme=transparent" 
                alt="GitHub streak stats"
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=thomas-nicholson&layout=compact&theme=transparent" 
              alt="Most used languages"
              className="max-w-full h-auto"
            />
          </div>
          <div className="mt-6 flex justify-center overflow-x-auto">
            <img 
              src="http://ghchart.rshah.org/thomas-nicholson" 
              alt="GitHub contribution graph"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Frontend</h3>
              <ul className="text-gray-600 space-y-1">
                <li>React & TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Backend</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">Senior Developer</h3>
              <p className="text-gray-600">TechCorp • 2020 - Present</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Full-Stack Developer</h3>
              <p className="text-gray-600">WebSolutions Inc • 2018 - 2020</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
);

export default Home;

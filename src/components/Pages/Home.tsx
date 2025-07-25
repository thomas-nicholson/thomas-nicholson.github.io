import React from "react";

const Home: React.FC = () => (
  <div className="min-h-screen dark:bg-gray-900 dark:text-gray-100">
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Thomas Nicholson
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Full-Stack Software Engineer</p>
      </div>

      <div className="space-y-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate software developer with expertise in building
            scalable web applications. My focus is on creating elegant solutions
            that solve real-world problems while maintaining clean, maintainable
            code.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            GitHub Activity
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
            <div className="w-full flex justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=thomas-nicholson&show_icons=true&theme=transparent"
                alt="GitHub stats"
                loading="lazy"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full flex justify-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=thomas-nicholson&theme=transparent"
                alt="GitHub streak stats"
                loading="lazy"
                className="max-w-full h-auto"
              />
            </div>
          </div>
          {/* <div className="mt-6 flex justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=thomas-nicholson&layout=compact&theme=transparent"
              alt="Most used languages"
              className="max-w-full h-auto"
            />
          </div> */}
          <div className="mt-6 flex justify-center overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/thomas-nicholson"
              alt="GitHub contribution graph"
              loading="lazy"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Frontend</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>JavaScript</li>
                <li>React & TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Backend</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Java</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">
                Platform Engineer - Consultant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Deloitte • 2021 - present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

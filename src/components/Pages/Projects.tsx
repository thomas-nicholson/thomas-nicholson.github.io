
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Deja Do',
      description: 'A simple to-do list app where the lists reset hourly or daily.',
      image: '/src/assets/deja-do.png',
      tech: ['React', 'Typescript', 'Tailwind'],
      github: 'https://github.com/thomas-nicholson/deja-do',
      demo: 'https://deja-do-tnicholson3701.replit.app/'
    },
    {
      title: 'Money Talks',
      description: 'A real-time task management application with team collaboration features.',
      image: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/thomas-nicholson/money-talks-lol',
      demo: 'https://demo-tasks.com'
    },
    {
      title: 'AI Chat Interface',
      description: 'A modern chat interface powered by machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1661956602139-ec64991b8b16',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: 'https://github.com/username/aichat',
      demo: 'https://demo-chat.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo}
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

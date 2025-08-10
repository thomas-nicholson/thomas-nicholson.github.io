import React from "react";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const initialProjects = [
    {
      title: "Deja Do",
      description:
        "A simple to-do list app where the lists reset hourly or daily.",
      image: "/deja-do.png",
      tech: ["React", "Typescript", "Tailwind"],
      github: "https://github.com/thomas-nicholson/deja-do",
      demo: "https://deja-do-tnicholson3701.replit.app/",
    },
    {
      title: "Money Talks",
      description:
        "A platform where users can put their money where their mouth is. Create bets on your opinions and see who comes out on top",
      image: "/money-talks.png",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
      github: "https://github.com/thomas-nicholson/money-talks-lol",
      demo: "https://demo-tasks.com",
    },
    {
      title: "AI Chat Interface",
      description:
        "A modern chat interface powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/username/aichat",
      demo: "https://demo-chat.com",
    },
  ];

  const archivedProjects = [
    {
      title: "Trail Mapping System",
      description: "A GPS-based mapping system for hiking trails and outdoor activities.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      tech: ["Python", "Django", "Leaflet.js", "PostgreSQL"],
      year: "2019",
    },
    {
      title: "Campsite Finder",
      description: "Mobile-friendly web app for finding and reviewing campsites.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      tech: ["React", "Node.js", "MongoDB"],
      year: "2018",
    },
  ];

  const projects = initialProjects;
  // const [isDragging, setIsDragging] = useState(false);

  // const handleDragStart = (e: React.DragEvent<HTMLDivElement>, project: any) => {
  //   setIsDragging(true);
  //   e.dataTransfer.setData("text/plain", project.title);
  //   e.currentTarget.style.opacity = "0.4";
  // };

  // const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   e.dataTransfer.dropEffect = "move";
  // };

  // const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
  //   setIsDragging(false);
  //   e.currentTarget.style.opacity = "1";
  // };

  // const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   const draggedProjectTitle = e.dataTransfer.getData("text/plain");
  //   const draggedProjectIndex = projects.findIndex(
  //     (project) => project.title === draggedProjectTitle
  //   );
  //   const newProjects = [...projects];
  //   const [draggedProject] = newProjects.splice(draggedProjectIndex, 1);
  //   newProjects.splice(e.currentTarget.dataset.index,0, draggedProject);
  //   setProjects(newProjects);
  // };


  return (
    <div className="min-h-screen py-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative group"
              // draggable
              // onDragStart={(e) => handleDragStart(e, project)}
              // onDragOver={handleDragOver}
              // onDrop={handleDrop}
              // onDragEnd={handleDragEnd}
              // data-index={index}
            >
              <div className="relative">
                {/* <div 
                  className="relative transition-transform duration-200 ease-in-out"
                  style={{
                    transform: `scale(${isDragging ? '1.02' : '1'})`,
                    opacity: isDragging ? '0.8' : '1',
                    boxShadow: isDragging ? '0 20px 25px -5px rgb(0 0 0 / 0.1)' : 'none'
                  }}
                > */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-6 flex flex-col gap-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none p-1">
                  <div className="h-0.5 w-full bg-gray-400 rounded"></div>
                  <div className="h-0.5 w-full bg-gray-400 rounded"></div>
                </div> */}
                {index === 1 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-xl font-bold transform -rotate-12">
                      Under Construction
                    </span>
                  </div>
                )}
                {index !== 0 && index !== 1 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-xl font-bold transform -rotate-12">
                      Placeholder
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 dark:text-gray-300 rounded-full text-sm"
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
                    href={index === 0 ? project.demo : "#"}
                    className={`${
                      index === 0
                        ? "text-blue-600 hover:text-blue-800"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => index !== 0 && e.preventDefault()}
                  >
                    Live Demo
                  </a>
                  <Link
                    to={`/blog/${project.title.toLowerCase().replace(/\s+/g, "-")}-project`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 mt-16 text-center">
          Mobile App Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "TaskFlow Mobile",
              description: "A productivity app with gesture-based navigation and offline sync capabilities.",
              tech: ["React Native", "TypeScript", "SQLite", "Redux"],
              year: "2023"
            },
            {
              title: "WeatherNow",
              description: "Real-time weather app with location-based forecasts and severe weather alerts.",
              tech: ["Flutter", "Dart", "Firebase", "Maps API"],
              year: "2022"
            }
          ].map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <div 
                  className="w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                  style={{ aspectRatio: '9/16' }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <span className="text-gray-500 text-sm">Mobile Screenshot</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-lg font-bold transform -rotate-12">
                    Placeholder
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h2>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 cursor-not-allowed text-sm"
                    onClick={(e) => e.preventDefault()}
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 cursor-not-allowed text-sm"
                    onClick={(e) => e.preventDefault()}
                  >
                    Live Demo
                  </a>
                  <Link
                    to={`/blog/${project.title.toLowerCase().replace(/\s+/g, "-")}-project`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 mt-16 text-center">
          Archived Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archivedProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-xl font-bold transform -rotate-12">
                    Placeholder
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h2>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
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

import React from "react";
import { Link } from "react-router-dom";

type ProjectStatus = "live" | "wip" | "placeholder";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  blogSlug?: string;
  status: ProjectStatus;
}

interface ArchivedProject {
  title: string;
  description: string;
  image: string;
  tech: string[];
  year: string;
}

const statusLabels: Record<ProjectStatus, string | null> = {
  live: null,
  wip: "Under Construction",
  placeholder: "Placeholder",
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Deja Do",
      description:
        "A simple to-do list app where the lists reset hourly or daily.",
      image: "/deja-do.png",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/thomas-nicholson/deja-do",
      demo: "https://deja-do-tnicholson3701.replit.app/",
      blogSlug: "deja-do-project",
      status: "live",
    },
    {
      title: "Money Talks",
      description:
        "A platform where users can put their money where their mouth is. Create bets on your opinions and see who comes out on top.",
      image: "/money-talks.png",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
      github: "https://github.com/thomas-nicholson/money-talks-lol",
      blogSlug: "money-talks-project",
      status: "wip",
    },
    {
      title: "AI Chat Interface",
      description:
        "A modern chat interface powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      blogSlug: "ai-chat-project",
      status: "placeholder",
    },
  ];

  const mobileProjects: Project[] = [
    {
      title: "Pocket Planner",
      description:
        "A lightweight daily planner focused on quick capture and gentle reminders.",
      image: "/pocket-planner.png",
      tech: ["React Native", "TypeScript", "Expo"],
      github: "https://github.com/thomas-nicholson/pocket-planner",
      demo: "https://pocket-planner.app",
      appStoreUrl: "https://apps.apple.com",
      playStoreUrl: "https://play.google.com",
      status: "live",
    },
    {
      title: "TrailBuddy",
      description:
        "Offline-first trail notes and waypoint tracking for weekend hikes.",
      image: "/trailbuddy.png",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/thomas-nicholson/trailbuddy",
      appStoreUrl: "https://apps.apple.com",
      status: "wip",
    },
  ];

  const archivedProjects: ArchivedProject[] = [
    {
      title: "Trail Mapping System",
      description:
        "A GPS-based mapping system for hiking trails and outdoor activities.",
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

  return (
    <div className="min-h-screen py-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const statusLabel = statusLabels[project.status];
            const hasGithub = Boolean(project.github);
            const hasDemo = Boolean(project.demo);

            return (
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
                  {statusLabel && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-xl font-bold transform -rotate-12">
                        {statusLabel}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {hasGithub ? (
                      <a
                        href={project.github}
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span className="text-gray-400 cursor-not-allowed">GitHub</span>
                    )}
                    {hasDemo ? (
                      <a
                        href={project.demo}
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-gray-400 cursor-not-allowed">Live Demo</span>
                    )}
                    {project.blogSlug ? (
                      <Link
                        to={`/blog/${project.blogSlug}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Read More
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 mt-16 text-center">
          Mobile Apps
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((project) => {
            const statusLabel = statusLabels[project.status];
            const hasGithub = Boolean(project.github);
            const hasDemo = Boolean(project.demo);
            const hasStoreLinks =
              Boolean(project.appStoreUrl) || Boolean(project.playStoreUrl);

            return (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  {statusLabel && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-xl font-bold transform -rotate-12">
                        {statusLabel}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {hasGithub ? (
                      <a
                        href={project.github}
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span className="text-gray-400 cursor-not-allowed">GitHub</span>
                    )}
                    {hasDemo ? (
                      <a
                        href={project.demo}
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-gray-400 cursor-not-allowed">Live Demo</span>
                    )}
                    {project.blogSlug ? (
                      <Link
                        to={`/blog/${project.blogSlug}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Read More
                      </Link>
                    ) : null}
                  </div>
                  {hasStoreLinks ? (
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Get the app
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.appStoreUrl ? (
                          <a
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                              alt="Download on the App Store"
                              className="h-10 w-auto"
                              loading="lazy"
                            />
                          </a>
                        ) : null}
                        {project.playStoreUrl ? (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                              alt="Get it on Google Play"
                              className="h-10 w-auto"
                              loading="lazy"
                            />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
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
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h2>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-full text-sm"
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

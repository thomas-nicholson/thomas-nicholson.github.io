export interface BlogPost {
  title: string;
  slug: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    title: "Building Deja Do: A Time-Based Todo App",
    slug: "deja-do-project",
    content:
      "A detailed look at how I built a todo list app where lists reset hourly or daily using React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Creating Money Talks: Real-Time Task Management",
    slug: "money-talks-project",
    content:
      "Exploring the development of a real-time task management system with team collaboration features using TypeScript, Next.js, PostgreSQL, and Socket.io.",
  },
  {
    title: "Developing an AI Chat Interface",
    slug: "ai-chat-project",
    content:
      "Building a modern chat interface powered by machine learning algorithms using Python, TensorFlow, React, and FastAPI.",
  },
];

export default posts;

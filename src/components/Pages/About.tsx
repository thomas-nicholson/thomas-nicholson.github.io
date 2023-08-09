import React from 'react';

const About: React.FC = () => (
  <div className="container mx-auto p-4 lg:p-8 text-black bg-white">
    <h1 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h1>
    <p className="text-gray-700 mb-4">I'm an experienced software developer specialized in full-stack development. I enjoy crafting elegant solutions to complex problems and strive to create intuitive user experiences.</p>
    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Education</h2>
    <p className="text-gray-700 mb-4">[Your University] - B.S. in Computer Science, Graduated in [Year]</p>
    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Experience</h2>
    <p className="text-gray-700 mb-4">[Company Name] - Software Engineer, [Years of Service]</p>
    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Skills</h2>
    <ul className="list-disc pl-5 mb-4">
      <li className="mb-2">JavaScript & TypeScript</li>
      <li className="mb-2">React, Vue, Angular</li>
      <li className="mb-2">Node.js, Express</li>
      <li className="mb-2">MongoDB, PostgreSQL</li>
    </ul>
    {/* You can add more sections like hobbies, interests, or anything else relevant to your profile */}
  </div>
);

export default About;

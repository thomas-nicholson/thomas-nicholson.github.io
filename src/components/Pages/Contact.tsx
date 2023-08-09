import React from 'react';

const Contact: React.FC = () => (
  <div className="container mx-auto p-4 lg:p-8 text-black bg-white">
    <h1 className="text-3xl lg:text-4xl font-bold mb-6">Contact Me</h1>
    <p className="text-gray-700 mb-6">Feel free to get in touch with me through any of the following means:</p>
    <div className="mb-4">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Email</h2>
      <a href="mailto:yourname@example.com" className="text-blue-500">yourname@example.com</a>
    </div>
    <div className="mb-4">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-2">LinkedIn</h2>
      <a href="https://www.linkedin.com/in/yourname" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourname</a>
    </div>
    <div className="mb-4">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-2">GitHub</h2>
      <a href="https://github.com/yourname" className="text-blue-500" target="_blank" rel="noopener noreferrer">github.com/yourname</a>
    </div>
    {/* You can add more contact details or a contact form */}
  </div>
);

export default Contact;

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h1>

          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                <a href="mailto:thomas@example.com" className="text-blue-600 hover:text-blue-800">
                  thomas@example.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/thomasnicholson" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/thomasnicholson
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">GitHub</h3>
                <a 
                  href="https://github.com/thomasnicholson" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/thomasnicholson
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
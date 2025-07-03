import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:thomas@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Get in Touch
          </h1>

          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Contact Information
            </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                <a
                  href="mailto:thomas@example.com"
                  className="text-blue-600 hover:text-blue-800"
                >
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
            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded dark:bg-gray-700"
                  required
                />
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

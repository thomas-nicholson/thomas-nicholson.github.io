import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post';

const App: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;

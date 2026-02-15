
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Updates from './pages/Updates';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import JoinUs from './pages/JoinUs';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </Layout>
  );
}

export default App;

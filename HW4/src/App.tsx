import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import XkcdComic from './components/XkcdComic'; // adjust path as necessary

const App: React.FC = () => {
  // Replace with your actual email
  const email = 'i.kalmykov@innopolis.university';

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <XkcdComic email={email} />
        <Contact />
      </main>
    </div>
  );
};

export default App;

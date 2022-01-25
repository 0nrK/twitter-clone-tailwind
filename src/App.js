import './App.css';
import React from 'react';
import Tweet from './components/Tweet';
import ContainerHeading from './components/ContainerHeading';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';

function App() {
  return (
    <main className="max-w-screen-2xl flex flex-row h-screen mx-auto">
      <Sidebar />
      <section className='container  '>
        <ContainerHeading />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />

      </section>
      <section className='timeline'>
        <Timeline />
      </section>
    </main>
  );
}

export default App;

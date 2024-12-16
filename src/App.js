import React, { useEffect } from 'react';
import './App.css';
import NewsFeed from './screens/NewsFeed/NewsFeed';
import Header from './components/Header';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-4 bg-primary">
      <Header />
      <NewsFeed />
    </div>
  );
}

export default App;

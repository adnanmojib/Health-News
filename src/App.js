import React from 'react';
import NewsApp from './components/NewsApp'; // Adjust the path if necessary

function App() {
  return (
    <div className="App">
      <header className="bg-slate-900 text-white p-4">
        <h1 className="text-3xl text-center font-bold">My News App</h1>
      </header>
      <main>
        <NewsApp />
      </main>
    </div>
  );
}

export default App;

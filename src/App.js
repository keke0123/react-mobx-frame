import React from 'react';
import './App.css';
import TopLayouts from './layouts';
import StoreProvider from './store/context';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <TopLayouts></TopLayouts>
      </div>
    </StoreProvider>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { Home } from './pages';
import { DefaultTemplate } from './templates';

function App() {
  return (
    <DefaultTemplate><Home /></DefaultTemplate>
  );
}

export default App;

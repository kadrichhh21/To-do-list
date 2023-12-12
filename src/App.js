import './App.css';
import { ToDoWrapper } from './components/ToDoWrapper';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Component } from 'react';

function App() {
  return (
    <ErrorBoundary>
      <Component></Component>
    </ErrorBoundary>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextWrapper from './contextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper></ContextWrapper>
  </React.StrictMode>
);

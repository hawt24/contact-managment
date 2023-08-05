import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './router';

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider routes={routes} />
    </React.StrictMode>
  );
};

export default App;

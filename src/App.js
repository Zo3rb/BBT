import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, TaskOne, TaskTwo } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/task1' element={<TaskOne />} />
        <Route exact path='/task2' element={<TaskTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

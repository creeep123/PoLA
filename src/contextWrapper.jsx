import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import PolaContext from './components/context';
import courseData from './components/coursesData';

console.log('courseData :>> ', courseData);

const value = {
  userName:"Jack",
  userEmail:"Jack@gmail.com",
  address: '0x4Be9933b776d2DAd8332b3DBC63Da698E3e333d4',
  role: 'student',
  allCourses: courseData,
  enrolledCourses: [],
  publishedCourses:[],
  points:27
};

const ContextWrapper = () => {
  const [store, setStore] = useState(value);

  return (
    <PolaContext.Provider value={{ store, setStore }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/landing" element={<Landing />} />
        </Routes>
        <App />
      </BrowserRouter>
    </PolaContext.Provider>
  );
};
export default ContextWrapper;

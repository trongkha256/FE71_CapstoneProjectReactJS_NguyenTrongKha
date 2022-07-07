import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import HomePage from './Pages/Homepgae/HomePage';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import GlobalStyle from './GlobalStyle';
import Register from 'Pages/Register/Register';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='Register' element={<Register />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route index element={<HomePage />}></Route>
          <Route path='*' element={<Navigate to={''} />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

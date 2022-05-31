import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Midterm/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Midterm/Form';
import UpdateNews from './Midterm/Update';
import Home from './Midterm/Home';
import Header from './Midterm/Header.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<App />} />
        <Route path="admin/create" element={<Form action="create" />} />
        <Route path="admin/update/:id" element={<UpdateNews />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

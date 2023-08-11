import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  BueroHorw,
  PuristischesBadezimmer,
  BueroVideolution,
  StudioNeubau,
  WohnungAmSee
} from './pages/Projects';
import Home from './pages/Home';
import { Datenschutz, Impressum } from './pages/Legal';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="BueroHorw" element={<BueroHorw />} />
        <Route path="PuristischesBadezimmer" element={<PuristischesBadezimmer />} />
        <Route path="StudioNeubau" element={<StudioNeubau />} />
        <Route path="BueroVideolution" element={<BueroVideolution />} />
        <Route path="WohnungAmSee" element={<WohnungAmSee />} />
        <Route path="Impressum" element={<Impressum />} />
        <Route path="Datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
import { LanguageProvider } from './CreateContent/LanguageProvider';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/OfficeHorw" element={<BueroHorw />} />
          <Route path="/PuristicBathroom" element={<PuristischesBadezimmer />} />
          <Route path="/NewConstructionStudio" element={<StudioNeubau />} />
          <Route path="/OfficeVideolution" element={<BueroVideolution />} />
          <Route path="/LakefrontApartment" element={<WohnungAmSee />} />
          <Route path="/Imprint" element={<Impressum />} />
          <Route path="/Privacy" element={<Datenschutz />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();

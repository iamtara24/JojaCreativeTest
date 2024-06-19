import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/main.css';
import Homepage from './view/homepage';
import ListSearch from './view/listSearch';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/results" element={<ListSearch />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MathJaxContext } from 'better-react-mathjax';

import HomePage from './pages/homePage/homePage';
import Tydzien1 from './pages/1/1';
import Tydzien2 from './pages/2/2';

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MathJaxContext version={3} config={config}>
      {/*<RouterProvider router={router} />*/}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='1' element={<Tydzien1 />} />
          <Route path='2' element={<Tydzien2 />} />
         
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>

      </BrowserRouter>





    </MathJaxContext>
  </React.StrictMode>
);
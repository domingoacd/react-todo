import React from 'react';
import './css/base.css';

import Content  from "./components/Content";
import Footer  from "./components/Footer";

function App() {
  return (
    <div className="main_container">
      <Content />
      <Footer />
    </div>
  );
}

export default App;

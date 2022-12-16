import React from "react";

import About from "./features/Home/components/About/About";
import Header from "./UI/organisms/Header/Header";

function App() {
  return (
    <div className="dark:bg-dark-grey bg-slate-100 min-h-screen">
      <Header />
      <About />
    </div>
  );
}

export default App;

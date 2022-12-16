import React from "react";

import styles from "./App.module.css";
import About from "./features/Home/components/About/About";

function App() {
  return (
    <div className={styles.app}>
      <About />
    </div>
  );
}

export default App;

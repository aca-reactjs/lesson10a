import React, { useState } from "react";

import styles from "./App.module.css";
import Calculator from "./Calculator/Calculator";
import List from "./components/List";
import ListWrapper from "./components/ListWrapper";

export const ListItemsContext = React.createContext(null);

function App() {
  return (
    <div className={styles.app}>
      <ListWrapper />
      <ListWrapper />

      {/* <Calculator /> */}
    </div>
  );
}

export default App;

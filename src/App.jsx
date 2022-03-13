import React, { useState } from "react";

import styles from "./App.module.css";
import Calculator from "./Calculator/Calculator";
import List from "./components/List";
import ListWrapper from "./components/ListWrapper";
import useListItems from "./hooks/useListItems";
import ListItemProvider from "./providers/LIstItemsProvider";

function App() {
  const value = useListItems();

  return (
    <div className={styles.app}>
      <ListItemProvider>
        <ListWrapper />
      </ListItemProvider>

      {/* <Calculator /> */}
    </div>
  );
}

export default App;

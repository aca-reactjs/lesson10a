import { useState, useContext } from "react";

import styles from "./List.module.css";
import { useListItems } from "../providers/LIstItemsProvider";

function List() {
  const { listItems, handleListItemsChange } = useListItems();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements[0];

    handleListItemsChange(input.value);

    input.value = "";
  };

  return (
    <div className={styles.app}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <input type="text" className={`${styles.input} ${styles.common}`} />
      </form>

      <ul className={styles.list}>
        {listItems.map((el, idx) => (
          <li key={idx} className={`${styles.listItem} ${styles.common}`}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

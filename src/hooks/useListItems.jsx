import { useState } from "react";

const useListItems = () => {
  const [listItems, setListItems] = useState([]);

  const handleListItemsChange = (value) => {
    setListItems((prev) => [...prev, value]);
  };

  return {
    listItems,
    handleListItemsChange,
  };
};

export default useListItems;

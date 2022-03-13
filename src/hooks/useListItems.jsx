import { useState, useEffect } from "react";

const useListItems = () => {
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
  );

  const handleListItemsChange = (value) => {
    setListItems((prev) => [...prev, value]);
  };

  useEffect(() => {
    if (listItems?.length) {
      localStorage.setItem("listItems", JSON.stringify(listItems));
    }
  }, [listItems]);

  return {
    listItems,
    handleListItemsChange,
  };
};

export default useListItems;

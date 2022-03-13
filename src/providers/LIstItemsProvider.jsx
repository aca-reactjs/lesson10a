import React from "react";
import useListItemsHook from "../hooks/useListItems";

const ListItemsContext = React.createContext(null);

export default function ListItemProvider({ children }) {
  const value = useListItemsHook();

  return (
    <ListItemsContext.Provider value={value}>
      {children}
    </ListItemsContext.Provider>
  );
}

export const useListItems = () => React.useContext(ListItemsContext);

import React, { useReducer, createContext } from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_REQUEST":
      return { loading: true, categories: [] };
    case "CATEGORY_REQUEST_SUCCESS":
      return { loading: false, categories: action.payload };
    case "CATEGORY_REQUEST_ERROR":
      return { loading: false, error: action.payload, categories: [] };
    case "ALL_IMAGES_SUCCESS":
      return { loading: false, allImages: action.payload };
    default:
      return state;
  }
};

const initialState = {
  loading: false,
  error: "",
  categories: [],
  allImages: [],
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;

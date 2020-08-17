import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({
  reducer,
  initialState,
  value,
  children,
  user,
  test,
}) => <StateContext.Provider value={value}>{children}</StateContext.Provider>;

export const useStatevalue = () => useContext(StateContext);
export default StateProvider;

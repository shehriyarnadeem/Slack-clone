import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({
  reducer,
  initialState,
  children,
  user,
  test,
}) => <StateContext.Provider value={user}>{children}</StateContext.Provider>;

export const useStatevalue = () => useContext(StateContext);
export default StateProvider;

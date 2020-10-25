import React, { createContext, useContext, useReducer } from "react";

//prepares data layer
export const StateContext = createContext();

//wrap our app and provide data layer to every component in app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//how we will pull info from data layer
export const useStateValue = () => useContext(StateContext);

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/Thunk";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  console.log(state);
  return <div className='App'>hello from app</div>;
}

export default App;

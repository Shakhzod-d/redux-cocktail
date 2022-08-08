import { url } from "../Services/api";
import { saveData } from "./Actions/ActionCreater";

export const fetchCocktails = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  dispatch(saveData(data));
};

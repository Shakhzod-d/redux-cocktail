import { SAVE_DATA } from "./Actions/ActionType";
const initialState = {
  cocktailList: [],
};

const CocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      
      return { cocktailList: action.payload };
    default:
      return state;
  }
};
export default CocktailReducer;

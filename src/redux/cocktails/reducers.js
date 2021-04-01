import { createReducer } from "@reduxjs/toolkit";

import actions from "./actions";

const cocktailReducer = createReducer("margarita", {
  [actions.getQueryValue]: (_, { payload }) => payload,
});

const allCocktailsReducer = createReducer([], {
  [actions.getFetchCocktails]: (_, { payload }) => payload,
});

const modalReducer = createReducer(false, {
  [actions.changeShowModal]: (_, { payload }) => payload,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default { cocktailReducer, allCocktailsReducer, modalReducer };

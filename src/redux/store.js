import { configureStore } from "@reduxjs/toolkit";

import reducers from "./cocktails/reducers";

// импортируем функцию создания стора

// экспортируем стор

const store = configureStore({
  reducer: {
    query: reducers.cocktailReducer,
    cocktailsData: reducers.allCocktailsReducer,
    showModal: reducers.modalReducer,
  },
});

export default store;

import { createAction } from "@reduxjs/toolkit";

const getQueryValue = createAction("GET_QUERY_VALUE");

const getFetchCocktails = createAction("GET_FETCH_COCKTAILS");

const changeShowModal = createAction("MODAL");

// eslint-disable-next-line import/no-anonymous-default-export
export default { getQueryValue, getFetchCocktails, changeShowModal };

import { createReducer } from "@reduxjs/toolkit";
import {
  // getOrdersRequest,
  getOrdersSuccess,
  // getOrdersError,

  // add
  // addOrderRequest,
  addOrderSuccess,
  // addOrderError,

  // delete
  // deleteOrderRequest,
  deleteOrderSuccess,
  // deleteOrderErrors,

  // filter
  filterAction,
} from "./actions";

const orderReducer = createReducer([], {
  [getOrdersSuccess]: (_, { payload }) => payload,

  [addOrderSuccess]: (state, { payload }) => [...state, payload],

  [deleteOrderSuccess]: (state, { payload }) =>
    state.filter((order) => order.id !== payload),
});

const filterReducer = createReducer("", {
  [filterAction]: (_, { payload }) => payload,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { orderReducer, filterReducer };

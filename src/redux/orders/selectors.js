import { createSelector } from "@reduxjs/toolkit";

export const getOrders = (store) => store.orders;

export const filterOrder = (store) => store.filterOrder;

export const filteredOrders = createSelector(
  [getOrders, filterOrder],
  (allOrders, filter) => {
    filter = filter.toLowerCase();

    return allOrders.filter((order) =>
      order.name.toLowerCase().includes(filter)
    );
  }
);

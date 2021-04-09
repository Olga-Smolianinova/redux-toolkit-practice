import React, { Component } from "react";
import { connect } from "react-redux";

import operations from "../../redux/orders/operations";
import {
  // getOrders,
  filteredOrders,
} from "../../redux/orders/selectors";

import { filterAction } from "../../redux/orders/actions";

import Home from "./Home";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getMyOrders();
  }

  render() {
    return (
      <>
        <Home
          myOrders={this.props.myOrders}
          addMyOrder={this.props.addMyOrder}
          getMyOrders={this.props.getMyOrders}
          deleteMyOrder={this.props.deleteMyOrder}
          getMyFilter={this.props.getMyFilter}
        />
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    // myOrders: store.orders,
    // myOrders: getOrders(store),
    myOrders: filteredOrders(store),
  };
};
const mapDispatchToProps = {
  getMyOrders: operations.getOrders,
  addMyOrder: operations.addOrder,
  deleteMyOrder: operations.deleteOrder,

  getMyFilter: filterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

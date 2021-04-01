import React, { Component } from "react";
import { connect } from "react-redux";

// import {connect} from

import { getCocktail } from "../../services/cocktailsApi.js";

import actions from "../../redux/cocktails/actions";

import s from "./Cocktails.module.css";

class Cocktails extends Component {
  //   state = {
  //       queryValue: "",
  //     drinks: [],
  //   };

  componentDidMount() {
    // const { queryValue } = this.state;
    this.getDrinks();
  }

  componentDidUpdate(prevProps, prevState) {
    // const { queryValue } = this.state;

    // if (prevState.queryValue !== this.state.queryValue) {
    //   this.getDrinks();
    // }
    if (prevProps.myQuery !== this.props.myQuery) {
      this.getDrinks();
    }
  }

  // METHODS
  getDrinks = () => {
    // const { queryValue } = this.state;
    const { myQuery } = this.props;

    return getCocktail(myQuery).then((drinks) => {
      console.log(drinks);
      if (drinks !== null) {
        // this.setState({ drinks });
        this.props.getMyCocktails(drinks);
      }
    });
  };

  // для обработки ошибок, если пользователь не ввел данные
  validateInput = (value) => {
    // console.log(value);
    if (value.trim() !== "") {
      //   this.setState({ queryValue: value });
      this.props.getMyQuery(value);
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { queryValue } = e.target;

    // для обработки ошибок, если пользователь не ввел данные вызов:
    this.validateInput(queryValue.value);

    //   для очистки input
    queryValue.value = "";
  };

  toggleModal = () => {
    return !this.props.getChangeModal(!this.props.myModal);
  };

  render() {
    // const { drinks } = this.state;

    const { myModal, myCocktails } = this.props;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="queryValue" placeholder="your drink" />
        </form>

        <button type="button" onClick={this.toggleModal}>
          {`click ${myModal}`}
        </button>

        <h2>Cocktails Page</h2>

        <ul className={s.drinkList}>
          {myCocktails.map((drink) => {
            return (
              <li key={drink.idDrink}>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  width="150"
                />
                <p>{drink.strDrink}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    myQuery: store.query,
    myCocktails: store.cocktailsData,
    myModal: store.showModal,
  };
};
const mapDispatchToProps = {
  getMyQuery: actions.getQueryValue,
  getMyCocktails: actions.getFetchCocktails,
  getChangeModal: actions.changeShowModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);

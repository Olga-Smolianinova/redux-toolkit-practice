import React, { Component } from "react";

import { getCocktail } from "../../services/cocktailsApi.js";

import s from "./Cocktails.module.css";

class Cocktails extends Component {
  state = {
    queryValue: "",
    drinks: [],
  };

  componentDidMount() {
    // const { queryValue } = this.state;
    this.getDrinks();
  }

  componentDidUpdate(prevProps, prevState) {
    // const { queryValue } = this.state;

    if (prevState.queryValue !== this.state.queryValue) {
      this.getDrinks();
    }
  }

  // METHODS
  getDrinks = () => {
    const { queryValue } = this.state;
    return getCocktail(queryValue).then((drinks) => {
      console.log(drinks);
      if (drinks !== null) {
        this.setState({ drinks });
      }
    });
  };

  // для обработки ошибок, если пользователь не ввел данные
  validateInput = (value) => {
    // console.log(value);
    if (value.trim() !== "") {
      this.setState({ queryValue: value });
      return;
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

  render() {
    const { drinks } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="queryValue" placeholder="your drink" />
        </form>
        <h2>Cocktails Page</h2>

        <ul className={s.drinkList}>
          {drinks.map((drink) => {
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

export default Cocktails;

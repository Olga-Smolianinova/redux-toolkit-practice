import { Switch, Route, withRouter } from "react-router-dom";

import { Suspense } from "react";

import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //ссылка на  стили bootstrap

// Data
import routes from "./routes";

// Components
import Navigation from "./components/Navigation";

// импорты
// переключатель, роут, редирект
// массив роутов
// {connect}
// экшены и редюсеры

// import { getCocktail } from './services/cocktailsApi'
// getCocktail('margarita').then((d) => console.log(d))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback="Waiting...">
        <Switch>
          {routes.map((route) => {
            // console.log(route);
            return <Route {...route} />;
          })}
        </Switch>
      </Suspense>
    </>
  );
}

export default withRouter(App);

// ren - render() { return() }
// sst - this.setState( { } )
// est - this.state = { }
// impt - import PropTypes from 'prop-types'
// imrcp - im {Component}
// imr - im React
// сdu - comp.DidUpdate
// cp - const { } = this.props
// cs - const { } = this.state
// exp - export default _____
// props- this.props.propName
// state - this.state.stateName
// rcc - create class exp up
// rce  - create class exp down
// rafce - create arrow function
// rxactions - redux actions
// rxConst - redux const
// rxReducer - redux const

// npx create-react-app .

// npm install gh-pages --save-dev
//     "deploy": "gh-pages -d build",
//     "clean": "gh-pages-clean"
// after private -
// "homepage": "https://yaroslav-uaa.github.io/...",
// ||
//     "predeploy": "npm run build",
//     "deploy": "netlify deploy -p"
//   "homepage": "https://goit-react-hw-06-phonebook.netlify.app",

// npm install --save prop-types
// npm install --save-dev prettier husky lint-staged
// npm i uuid
// npm install axios
// npm install --save react-spinners
// npm i netlify-cli -g - нетліфай
// npm i redux
// npm install react-router-dom

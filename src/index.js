import React from "react";
import ReactDOM from "react-dom";
import store from "../src/Store/Store";
import "./index.css";
import App from "./App";
import History from "./Store/History";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Route, Link,Switch, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
//import HigherLevelGroupList from '../src/Components/HigherLevelGroupList'
import Login from "../src/Components/Login";
import Home from "../src/Components/Home";
import NewsFeed from '../src/Components/NewsFeed'
import CreateGroup from "../src/Components/CreateGroup";
import GroupsInfoTemplate from "../src/Components/Templates/GroupsInfoTemplate";
import JoinGroup from './Components/JoinGroup'
import PredictBusiness from "./Components/PredictBusiness"
import { persistStore } from 'redux-persist'

const Persistor = persistStore(store);

const routing = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
    <Router history={History}>
      <div>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/CreateGroup" component={CreateGroup} />
        <Route path="/JoinGroup" component={JoinGroup} />
        <Route path="/NewsFeed" component={NewsFeed} />
        <Route path="/PredictBusiness" component={PredictBusiness}/>
        {/* <Route  path="/HigherLevelGroupList" component={HigherLevelGroupList} /> */}
        <Route  path="/GroupsInfoTemplate/:GroupId" component={GroupsInfoTemplate} />
        </Switch>
      </div>
    </Router>
    </PersistGate>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

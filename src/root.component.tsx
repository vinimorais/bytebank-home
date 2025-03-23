import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import PrivateRoute from "./assets/components/Private-Route/privateRoute";
import Home from "./assets/components/Home/Home";
import Layout from "./assets/components/Layout/Layout";
import MainPage from "./assets/components/Main-Page/MainPage";
import Dashboard from "./assets/components/Dashboard/Dashboard";

const ReactApp: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
          <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/main" component={MainPage} />
            <PrivateRoute path="/dash" component={Dashboard} />
            {/* <Route path="/about" component={About} /> */}
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default ReactApp;

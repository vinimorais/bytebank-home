// src/ReactApp.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import Layout from './assets/components/Layout/Layout';
import MainPage from './assets/components/Main-Page/MainPage';
import Dashboard from './assets/components/Dashboard/Dashboard';
// import About from './components/About';

// Este será o componente que exportamos para o single-spa
const ReactApp: React.FC = () => {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main"component={MainPage} />
        <Route exact path="/dash"component={Dashboard} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
      </Layout>
    </Router>
  );
};

export default ReactApp;

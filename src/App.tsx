import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import AppDataStore from './stores/AppDataStore';

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import TopPage from "./components/top/TopPage";

class App extends React.Component {
  page = "aa1a"

  render() {
    return (
      <div className="App">
        <AppDataStore.Container>
          <Container fluid>
            <Router>
              <Navbar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/reports" component={Reports} />

                <Route path="/top">
                  <TopPage  page={this.page} />
                </Route>
              </Switch>
            </Router>
          </Container>
        </AppDataStore.Container>
      </div>
    );
  }
}

export default App;

/*
<Route path="/top" exact component={TopPage} />

function App() {
  return (
    <div className="App">
    <AppDataStore.Container>
      <Container fluid>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
          <Route path="/top" exact component={TopPage} />
        </Switch>
      </Router>
        </Container>
      </AppDataStore.Container>
    </div>
  );
}

export default App;

*/

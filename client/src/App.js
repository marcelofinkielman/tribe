import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/partials/global.scss";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import PageNotFound from "./pages/404NotFound/PageNotFound";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";



class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavBar />
          <div className="main">
            <div className="main__container">
              <Switch>
                {/* === ROUTING === */}
                <Route path="/" exact component={Warehouses} />
                <Route path="/warehouses" exact component={Warehouses} /> 
                <Route path="/inventory" exact component={Inventory} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;





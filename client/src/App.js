import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Style/Partials/Global.scss";
import MyPage from "./pages/MyPage/MyPage.jsx"
import CreateEvent from "./pages/CreateEvent/CreateEvent.jsx"
import PageNotFound from "./pages/404NotFound/PageNotFound.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer.jsx";


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={MyPage} />
            <Route path="/profile" exact component={MyPage} />
            <Route path="/create" exact component={CreateEvent} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;





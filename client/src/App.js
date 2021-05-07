import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss"
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import MyPage from "./pages/MyPage/MyPage.jsx"
import MyInterests from "./pages/MyInterests/MyInterests.jsx"
import CreateEvent from "./pages/CreateEvent/CreateEvent.jsx"
import PageNotFound from "./pages/404NotFound/PageNotFound.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer.jsx";



class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <BrowserRouter>
            <div className="app__nav">
              <NavBar />
            </div>
            <div className="app__body">
              <Switch>
                <Route path="/login" exact component={ LoginPage } />
                <Route path="/profile" component={ MyPage } />
                <Route path="/interests" component={ MyInterests } />
                <Route path="/create" component={ CreateEvent } />
                <Route path='/events/:tag' render={(routerProps) => <MyPage videoId={routerProps.match.params.id} />} />
                <Route component={ PageNotFound } />
              </Switch>
            </div>


          </BrowserRouter>

        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;





import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddVacations from "./components/AddVacations/AddVacations";
import Header from "./components/Shared/Header/Header";
import Blog from "./Pages/Blog/Blog";
import Deals from "./Pages/Deals/Deals";
import Home from "./Pages/Home/Home";
import MobileApp from "./Pages/MobileApp/MobileApp";
import Notfound from "./Pages/Notfound/Notfound";
import Trips from "./Pages/Trips/Trips";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/trips">
            <Trips></Trips>
          </Route>
          <Route path="/add-vacations">
            <AddVacations></AddVacations>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/mobile-app">
            <MobileApp></MobileApp>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

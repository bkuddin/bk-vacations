import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddVacations from "./components/AddVacations/AddVacations";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import Blog from "./Pages/Blog/Blog";
import Booking from "./Pages/Booking/Booking";
import Deals from "./Pages/Deals/Deals";
import Home from "./Pages/Home/Home";
import MobileApp from "./Pages/MobileApp/MobileApp";
import Notfound from "./Pages/Notfound/Notfound";
import Trips from "./Pages/Trips/Trips";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

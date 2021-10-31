import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddVacations from "./components/AddVacations/AddVacations";
import Login from "./components/Login/Login";
import ManageVacations from "./components/ManageVacations/ManageVacations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import UpdateVacations from "./components/UpdateVacations/UpdateVacations";
import AuthProvider from "./contexts/AuthProvider";
import Blog from "./Pages/Blog/Blog";
import Booking from "./Pages/Booking/Booking";
import Deals from "./Pages/Deals/Deals";
import Home from "./Pages/Home/Home";
import MobileApp from "./Pages/MobileApp/MobileApp";
import Notfound from "./Pages/Notfound/Notfound";
import Trips from "./Pages/Trips/Trips";
import UpdateBooking from "./Pages/UpdateBooking/UpdateBooking";
import UserManageBooking from "./Pages/UserManageBooking/UserManageBooking";
import Vacations from "./Pages/Vacations/Vacations";

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
            <Route path="/manage-vacations">
              <ManageVacations></ManageVacations>
            </Route>
            <Route path="/update-vacations/:vacationId">
              <UpdateVacations></UpdateVacations>
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
            <Route path="/my-booking">
              <UserManageBooking></UserManageBooking>
            </Route>
            <Route path="/vacations">
              <Vacations></Vacations>
            </Route>
            <Route path="/add-package">
              <AddVacations></AddVacations>
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

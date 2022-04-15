import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Booking from './Pages/Booking/Booking/Booking';
import NotFound from './Pages/Not Found/NotFound';

import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddNewBooking from './Pages/Booking/AddNewBooking/AddNewBooking';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageAllBookings from './Pages/Booking/ManageAllBookings/ManageAllBookings';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch >
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addNewBooking">
              <AddNewBooking></AddNewBooking>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

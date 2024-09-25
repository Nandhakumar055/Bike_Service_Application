import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BookingService from "./components/BookingService";
import yourBookingContext from "./context/yourBookingContext";


import './App.css'

const App = () => {
  const [userBookingList, setUserBookingList] = useState([])
  const user = localStorage.getItem("token");

  const addBookingItem = (newBooking) => {
    setUserBookingList([...userBookingList, {newBooking}])
  }

	return (
    <yourBookingContext.Provider
        value={{
          userBookingList: userBookingList,
          addBookingItem: addBookingItem,
        }}
      >
      <BrowserRouter>
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route path="/booking-service" element={<BookingService/>} />
        </Routes>
      </BrowserRouter>
    </yourBookingContext.Provider>
	);
}

export default App;
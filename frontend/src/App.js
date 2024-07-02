import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BookingService from "./components/BookingService";
import yourBookigContext from "./context/yourBookigContext";


import './App.css'

const App = () => {
  const [userBookingList, setUserBookingList] = useState([])
  const user = localStorage.getItem("token");

  const addBookingItem = (newBooking) => {
    setUserBookingList([...userBookingList, {newBooking}])
  }

	return (
    <yourBookigContext.Provider
        value={{
          userBookingList: userBookingList,
          addBookingItem: addBookingItem,
        }}
      >
      <BrowserRouter>
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/booking-service" element={<BookingService/>} />
        </Routes>
      </BrowserRouter>
    </yourBookigContext.Provider>
	);
}

export default App;
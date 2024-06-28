import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import './App.css'

function App() {
	const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
      <Routes>
        {user && <Route path="/" exact element={<Home />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
	);
}

export default App;
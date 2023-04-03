import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    )
}

export default AllRoutes;
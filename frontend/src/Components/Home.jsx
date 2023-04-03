import { Navigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";

function Home() {
    let temp = JSON.parse(localStorage.getItem("data")) || "";
    const [stat, setStat] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("data");
        temp = "";
        setStat(true);
    }

    if (stat) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            {temp === "" ? (
                <div className="homeDiv">
                    <h1>Welcome to the Website</h1>
                </div>) : (
                <div className="homeDiv">
                    <h1>Hello {temp.fullname}</h1>
                    <h2>Email: {temp.email}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

        </div>
    )
}

export default Home;
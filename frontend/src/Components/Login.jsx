import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Login() {
    const [det, setDet] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDet({ ...det, [name]: value })
    }

    const handleLogin = async () => {
        let res = await fetch("https://tame-bell-bottoms-calf.cyclic.app/login", {
            method: "POST",
            body: JSON.stringify(det),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();
        if (data.status === "success") {
            alert("Successfully created User");
        } else {
            alert("Something Went Wrong!")
        }
    }

    return (

        <div className="loginBox">
            <div className="container-image">
                <img src={"user.png"} alt="profile" className="profile" />
            </div>
            <h1 className="loginh1">Login Page</h1>
            <div className="formBox">
                <label>Email</label>
                <input type="text" name="email" value={det.email} onChange={(e) => handleChange(e)} />
                <label>Password</label>
                <input type="password" name="password" value={det.password} onChange={(e) => handleChange(e)} />
                <button onClick={handleLogin}>Login</button>
                <p className="logintext">Don't have a account. <Link to="/register">Click here to register</Link></p>
            </div>
        </div>
    );
}

export default Login;
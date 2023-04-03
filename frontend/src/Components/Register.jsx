import "./Login.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Register() {
    const [det, setDet] = useState({
        fullname: "", email: "", password: ""
    });
    const [stat, setStat] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDet({ ...det, [name]: value })
    }

    const handleRegister = async () => {
        let res = await fetch("https://ruby-angry-chameleon.cyclic.app/login", {
            method: "POST",
            body: JSON.stringify(det),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();
        if (data.status === "success") {
            setStat(true);
            alert("Successfully created User");
        } else {
            setStat(false);
            alert("Something Went Wrong!")
        }
    }

    if (stat) {
        return <Navigate to="/login" />
    }

    return (

        <div className="loginBox">
            <div className="container-image">
                <img src={"user.png"} alt="profile" className="profile" />
            </div>
            <h1 className="loginh1">Register Page</h1>
            <div className="formBox">
                <label >Full Name</label>
                <input type="text" name="fullname" value={det.fullname} onChange={(e) => handleChange(e)} />
                <label>Email</label>
                <input type="text" name="email" value={det.email} onChange={(e) => handleChange(e)} />
                <label>Password</label>
                <input type="password" name="password" value={det.password} onChange={(e) => handleChange(e)} />
                <button onClick={handleRegister}>Register</button>
                <p className="logintext">Already have a account. <Link to="/login">Click here to login</Link></p>
            </div>
        </div>
    );
}

export default Register;
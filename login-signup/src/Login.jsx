import React, { useState } from 'react'
import "./login.css"
import Dashboard from './Dashboard'
const Login = () => {
    const [username,Setusername] = useState("")
    const [password,Setpassword] = useState("")

     const [Dashboard,Setdashboard] = useState(false)
    const finalsubmit=async()=>{
          e.preventDefault();

    try {
      // ⚠️ Get all users from backend (no query string)
      const res = await axios.get("http://localhost:5000/users");
      const users = res.data;

      // 🔍 Step 1: Find user with matching username
      const foundUser = users.find((u) => u.username === username);

      if (!foundUser) {
        alert("❌ Username not found");
        return;
      }

      // 🔍 Step 2: Check password
      if (foundUser.password !== password) {
        alert("❌ Incorrect password");
        return;
      }

      alert("✅ Login successful");

      Setdashboard(true)
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error. Try again later.");
    }
  };

  if(Dashboard){
    return <Dashboard/>
  }
  return (
    <>
         <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <input
                type="text"
                placeholder="Username"
                onChange={(e)=>{Setusername(e.target.value)}}
                />
                <input
                type="password"
                placeholder="Password"
                 onChange={(e)=>{Setpassword(e.target.value)}}
                />
                <button onClick={finalsubmit} type="submit">Login</button>
            </form>
    </div>
    </>
  )
}

export default Login
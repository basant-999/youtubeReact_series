import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [data ,Setdata] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Check if username already exists
      const res = await axios.get("http://localhost:3000/user");
      const users = res.data;

      const existingUser = users.find((u) => u.username === username);

      if (existingUser) {
        alert("❌ Username already exists");
        return;
      }

      // Add new user
      await axios.post("http://localhost:3000/user", {
        username,
        password,
      });

      alert("✅ Signup successful");
      setUsername("");
      setPassword("");
         Setdata(true)
    } catch (err) {
      console.error("Signup error:", err);
      alert("Server error. Try again later.");
    }
  };
  
   if(data){
    return <Login/>
   }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h2>Signup</h2>
        <input
          style={styles.input}
          type="text"
          placeholder="Choose Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Choose Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Signup;

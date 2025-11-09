import React, { useState } from "react";
import api from "../api";

function UserForm({ onSuccess }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/users/add", { firstName, lastName, email });
    alert("✅ User added!");
    setFirstName("");
    setLastName("");
    setEmail("");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
    
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default UserForm;

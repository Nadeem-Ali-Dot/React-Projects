import React, { useState } from "react";
import api from "../api";

function UserEdit({ user, onCancel, onSave }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/users/${user.id}`, { firstName, lastName, email });
    alert("✅ User updated!");
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>✏️ Edit User</h2>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default UserEdit;

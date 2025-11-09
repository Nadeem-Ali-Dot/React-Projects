import React, { useEffect, useState } from "react";
import api from "../api";

function UserList({ onEdit, onDelete }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get("/users?limit=10");
    setUsers(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>👥 User List</h2>
      <table border="1" className="table table-bordered" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.firstName} {u.lastName}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => onEdit(u)}>✏️ Edit</button>
                <button onClick={() => onDelete(u.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

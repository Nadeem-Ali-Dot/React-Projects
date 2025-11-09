import React, { useState } from "react";
import api from "./api";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import UserEdit from "./components/UserEdit";

function App() {
  const [reload, setReload] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const refresh = () => setReload(!reload);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await api.delete(`/users/${id}`);
      alert("🗑️ User deleted!");
      refresh();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>⚛️ React CRUD using Dummy API</h1>

      {editingUser ? (
        <UserEdit
          user={editingUser}
          onCancel={() => setEditingUser(null)}
          onSave={() => {
            setEditingUser(null);
            refresh();
          }}
        />
      ) : (
        <UserForm onSuccess={refresh} />
      )}

      <UserList
        key={reload}
        onEdit={(user) => setEditingUser(user)}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

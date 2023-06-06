import React, { useState } from "react";
import { User, UserFormProps } from '../types';


type UserRole = "user" | "editor" | "admin";



const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const [role, setRole] = useState<UserRole>("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { name, email, active, role };
    addUser(newUser);
    setName("");
    setEmail("");
    setActive(false);
    setRole("user");
  };

  return (
    <div className="col">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="activeCheckbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          <label htmlFor="activeCheckbox" className="form-check-label">
            Active
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="roleSelect" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            id="roleSelect"
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
          >
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrator</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;

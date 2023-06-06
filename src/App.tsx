import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { User } from "./types";
import UserForm from "./components/UserForm";
import UserItem from "./components/UserItem";
import './App.css'

const App: React.FC = () => {
  const [users, serUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    serUsers([...users, user]);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <UserForm addUser={addUser} />
        <div className="col">
          <h1>Users</h1>
          {users.map((user, index) => (
            <UserItem key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

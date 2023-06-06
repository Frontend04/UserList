import React, { useState } from "react";

type UserRole = "user" | "editor" | "admin";

interface User {
  name: string;
  email: string;
  active: boolean;
  role: UserRole;
}
interface UserFormProps {
  addUser: (user: User) => void;
}
const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const [role, setRole] = useState<UserRole>("user");

  const hundleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { name, email, active, role };
    addUser(newUser);
    setName("");
    setEmail("");
    setActive(false);
    setRole("user");
  };

  return <div></div>;
};

export default UserForm;

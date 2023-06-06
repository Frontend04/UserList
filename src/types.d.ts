export interface User {
    name: string;
    email: string;
    active: boolean;
    role: UserRole;
}
export interface UserFormProps {   
  addUser: (user: User) => void;
}
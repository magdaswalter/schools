import { User } from "firebase/auth";
import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

const LoginForm = (props: { existingUser: User | null }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await FirebaseAuthService.registerUser(userName, password);
      setUsername("");
      setPassword("");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    FirebaseAuthService.logoutUser();
  };

  return (
    <div>
      <h1>Login Form</h1>
      {props.existingUser ? (
        <div>
          <h3>Welcome, {props.existingUser.email}</h3>
          <button type="button" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          Usename (email)
          <input
            type="email"
            required
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

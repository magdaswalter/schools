import React, { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div>
      <h1>Schools</h1>
      <LoginForm existingUser={user} />
    </div>
  );
}

export default App;

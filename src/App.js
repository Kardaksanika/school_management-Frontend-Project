import React, { useState } from "react";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";


function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {!showLogin ? (
        <Home onLogin={() => setShowLogin(true)} />
      ) : (
        <LoginPage onBack={() => setShowLogin(false)} />
      )}
    </>
  );
}

export default App;

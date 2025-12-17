import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ onLogin }) {
  return (
    <header className="bg-primary text-white py-3 shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="m-0 fw-bold">ABC International School</h2>

        <button
          className="btn btn-light fw-bold"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;

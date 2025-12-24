import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ onLogin }) {
  return (
    <header style={styles.header} className="shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 style={styles.title} className="m-0">
          ABC International School
        </h2>

        <button
          className="btn"
          style={styles.loginBtn}
          onClick={onLogin}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#ffd633")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#ffcc00")
          }
        >
          Login
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: "linear-gradient(90deg, #003366, #0059b3)",
    padding: "15px 0",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },

  title: {
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "22px",
    letterSpacing: "0.5px",
  },

  loginBtn: {
  backgroundColor: "#ffcc00",
  color: "#003366",
  fontWeight: 600,
  padding: "8px 24px",
  borderRadius: "6px",
  border: "none",
  transition: "0.3s",
  marginLeft: "30px",   
},
};

export default Header;

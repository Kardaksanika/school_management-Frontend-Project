import React from "react";

const LoginPage = ({ onBack }) => {
  return (
    <div style={styles.container}>
      <h2>Login Page</h2>

      <div style={styles.optionsBox}>
        <button style={styles.optionBtn}>Admin Login</button>
        <button style={styles.optionBtn}>General Login</button>
      </div>

      <button style={styles.backBtn} onClick={onBack}>
        Back
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },

  optionsBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "10px",
  },

  optionBtn: {
    padding: "10px 30px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #003366",
    backgroundColor: "#fff",
    color: "#003366",
    fontWeight: "bold",
    width: "200px",
    textAlign: "center",
    transition: "0.3s",
  },

  backBtn: {
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default LoginPage;

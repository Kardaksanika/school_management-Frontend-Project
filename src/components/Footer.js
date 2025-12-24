function Footer(){
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <p>Home</p>
          <p>AIMS</p>
          <p>FACT</p>
          <p>Social Commitment</p>
          <p>Branches</p>
          <p>Query / Suggestions</p>
          <p>Admissions</p>
          <p>Admission Process</p>
          <p>Enquiry</p>
          <p>Withdrawal Policy</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Achievements</h4>
          <p>10th Class</p>
          <p>National Level Test</p>

          <h4 style={{ ...styles.heading, marginTop: "12px" }}>Useful Links</h4>
          <p>Privacy Policy</p>
          <p>Events</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Our Branches</h4>
          <p>Gudavalli</p>
          <p>Vijayawada</p>
          <p>Guntur</p>
          <p>Nellore</p>
          <p>Tanuku</p>
          <p>Gudiwada</p>
          <p>Hyderabad</p>
          <p>Rajahmundry</p>
          <p>Eluru</p>
          <p>Kakinada</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Campus</h4>
          <p>Labs</p>
          <p>Library</p>

          <h4 style={{ ...styles.heading, marginTop: "12px" }}>Connect with us</h4>
          <p>Email</p>
          <p>Phone</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

      </div>

      <div style={styles.bottom}>
       School Management System
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%",
    background: "#252527ff",
    color: "white",
    paddingTop: "20px",
    marginTop: "30px",
  },
  container: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 40px",
  },
  column: {
    width: "170px",
    marginBottom: "15px",
    lineHeight: "1.0",   
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  appBtn: {
    display: "block",
    marginBottom: "6px",
    padding: "6px 10px",
    background: "white",
    color: "#003366",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  bottom: {
    marginTop: "10px",
    textAlign: "center",
    padding: "12px 0",
    background:"#003366",
    fontSize: "13px",
  },
};
export default Footer;

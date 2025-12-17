import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images from assets folder
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
//import img4 from "../assets/img4.jpg";

function Home({ onLogin }) {
  // Store imported images in array
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.page}>
      <Header onLogin={onLogin} />

      {/* Carousel */}
      <div style={styles.carousel}>
        <img
          src={images[currentIndex]}
          alt="carousel"
          style={styles.carouselImage}
        />
      </div>

      <div style={styles.content}>
        <h1 style={styles.mainTitle}>School Management</h1>

        <p style={styles.subtitle}>
          Welcome to our school management system. Explore academics, branches
          and more.
        </p>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f4f7fb",
    paddingTop: "100px",
  },

  carousel: {
    width: "100%",
    height: "400px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },

  carouselImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "opacity 0.8s ease-in-out",
  },

  content: {
    textAlign: "center",
    marginTop: "20px",
  },

  mainTitle: {
    fontSize: "46px",
    color: "#003366",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.5",
  },
};

export default Home;

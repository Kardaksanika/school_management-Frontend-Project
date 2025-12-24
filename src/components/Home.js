import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Highlights from "./Highlights";
import Facilities from "./Facilities";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Home({ onLogin }) {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

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

      {/* Highlights Section */}
      <Highlights />

      {/* Facilities Section */}
      <Facilities />

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
    transition: "opacity 0.8s ease-in-out",
  },

  content: {
    textAlign: "center",
    marginTop: "10px",
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

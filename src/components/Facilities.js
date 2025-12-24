import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../assets/img4.png";
import img2 from "../assets/img5.png";
import img3 from "../assets/img6.png";
import img4 from "../assets/img7.png";

const cardStyle = {
  width: "260px",
  height: "180px",
  perspective: "1000px",
};

const innerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
};

const faceStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

function Facilities() {
  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#ffffff" }}>
      <h3
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "#003366",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Facilities
      </h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            maxWidth: "840px",
            justifyContent: "center",
          }}
        >
          {/* LABS */}
          <FacilityCard
            img="https://th.bing.com/th/id/OIP.oGTUsimoZA_jxlBMaXcg-wHaE7?w=281&h=187&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
            title="Labs"
            desc="Well-equipped science and computer laboratories."
          />

          {/* LIBRARY */}
          <FacilityCard
            img="https://th.bing.com/th/id/OIP.faGHgNZneUPzbikbNJk-TgHaDG?w=350&h=146&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
            title="Library"
            desc="A rich collection of academic and reference books."
          />

          {/* SPORTS */}
          <FacilityCard
            img="https://th.bing.com/th/id/OIP.c3mCj2TbHG5BuCxxWf1MIwHaEK?w=328&h=184&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
            title="Sports"
            desc="Indoor and outdoor sports for holistic development."
          />

          {/* TRANSPORT */}
          <FacilityCard
            img="https://th.bing.com/th/id/OIP.gTCSKaCMoa8R9Q_EAfVl1AHaE8?w=275&h=184&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
            title="Transport"
            desc="Safe and reliable transportation facility."
          />

          {/* SMART CLASSROOM */}
          <FacilityCard
            img="https://th.bing.com/th/id/OIP.ID-TxTb_6oeVkXsAN5RX8gHaEJ?w=275&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1"
            title="Smart Classroom"
            desc="Digital classrooms with modern teaching tools."
          />

          {/* MEDICAL CARE */}
          <FacilityCard
            img="https://th.bing.com/th/id/OIP.qRMhWdJlt5FAgMPM9rcmdgHaD1?w=333&h=179&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
            title="Medical Care"
            desc="On-campus medical support and first aid facilities."
          />
        </div>
      </div>

      <style>
        {`
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
}

/* Reusable Card Component */
function FacilityCard({ img, title, desc }) {
  return (
    <div style={cardStyle} className="flip-card">
      <div style={innerStyle} className="flip-card-inner">
        <div style={faceStyle}>
          <img src={img} alt={title} style={imageStyle} />
        </div>
        <div
          style={{
            ...faceStyle,
            transform: "rotateY(180deg)",
            backgroundColor: "#fff",
            flexDirection: "column",
          }}
        >
          <h5 style={{ color: "#003366" }}>{title}</h5>
          <p style={{ color: "#555", padding: "0 10px" }}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Facilities;

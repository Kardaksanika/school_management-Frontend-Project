import React from "react";

const cardStyle = {
  width: "280px",
  height: "180px",
  perspective: "1000px",
};

const innerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
};

const faceStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: "#fff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

function Highlights() {
  return (
    <>
      {/* INTRO SECTION */}
      <div
        style={{
          padding: "50px 20px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#003366",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          Welcome to KKR’s Gowtham Educational Institutions
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "17px",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          We had only one target in mind: an outgoing student of Gowtham should
          carry with him the profound knowledge of the fundamentals of the
          subject, and the confidence to face competitive examinations and life
          challenges.
        </p>
      </div>

      {/* HIGHLIGHTS SECTION */}
      <div
        style={{
          padding: "50px 20px",
          backgroundColor: "#f4f7fb",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
          }}
        >
          {/* CARD 1 */}
          <div style={cardStyle} className="flip-card">
            <div style={innerStyle} className="flip-card-inner">
              {/* Front */}
              <div style={faceStyle}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  alt="Robotics"
                  width="90"
                />
                <p style={{ marginTop: "8px", fontWeight: "800", color: "#003366" }}>
                Robotics</p>
              </div>

              {/* Back */}
              <div style={{ ...faceStyle, transform: "rotateY(180deg)" }}>
                <h4 style={{ color: "#003366", marginBottom: "10px" }}>
                  Robotics at KKR Gowtham
                </h4>
                <p style={{ color: "#555" }}>
                  Learn and play with robotics and innovative technologies.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div style={cardStyle} className="flip-card">
            <div style={innerStyle} className="flip-card-inner">
              <div style={faceStyle}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Learning"
                  width="90"
                />
                <p style={{ marginTop: "8px", fontWeight: "800", color: "#003366" }}>
                Partner</p>
              </div>

              <div style={{ ...faceStyle, transform: "rotateY(180deg)" }}>
                <h4 style={{ color: "#003366", marginBottom: "10px" }}>
                  Partner with Practically
                </h4>
                <p style={{ color: "#555" }}>
                  3000+ videos, simulations and hands-on learning tools.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div style={cardStyle} className="flip-card">
            <div style={innerStyle} className="flip-card-inner">
              <div style={faceStyle}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                  alt="Faculty"
                  width="90"
                />
                <p style={{ marginTop: "8px", fontWeight: "800", color: "#003366" }}>
                Faculty</p>
              </div>

              <div style={{ ...faceStyle, transform: "rotateY(180deg)" }}>
                <h4 style={{ color: "#003366", marginBottom: "10px" }}>
                  Experienced Faculty
                </h4>
                <p style={{ color: "#555" }}>
                  Highly qualified and dedicated teaching professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Flip */}
      <style>
  {`
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card {
      transition: transform 0.3s ease;
    }

    .flip-card:hover {
      transform: translateY(-6px);
    }

    .flip-card-inner {
      box-shadow: 0 0 0 rgba(0,0,0,0);
    }

    .flip-card:hover .flip-card-inner {
      box-shadow: 0 8px 20px rgba(0, 51, 102, 0.25);
    }
  `}
</style>

    </>
  );
}

export default Highlights;

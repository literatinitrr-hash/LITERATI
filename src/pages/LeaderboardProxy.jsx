import React from "react";

function LeaderboardProxy() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏆 Leaderboard</h1>
        <p style={styles.text}>The leaderboard will be live soon.</p>
       
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#111",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    maxWidth: "400px",
    width: "90%",
  },
  title: {
    fontSize: "28px",
    marginBottom: "12px",
    color: "#fff",
  },
  text: {
    fontSize: "18px",
    color: "#ccc",
  },
};

export default LeaderboardProxy;

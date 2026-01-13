import React from "react";

function LeaderboardProxy() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏆 Leaderboard</h1>
        <p style={styles.text}>The leaderboard will be live soon.</p>
        <p style={styles.subText}>
          We’re working on it — check back shortly!
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "rgba(17, 17, 17, 0.9)",
    padding: "40px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    maxWidth: "420px",
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
  subText: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#999",
  },
};

export default LeaderboardProxy;

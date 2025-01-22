import React from "react";
import "./../styles/ResultDisplay.css";

const ResultDisplay = ({ result, error, loading }) => {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (result) {
    return <div className="success">{result}</div>;
  }

  return null;
};
export default ResultDisplay;

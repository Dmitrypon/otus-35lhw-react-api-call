import React, { useState } from "react";
import FetchButton from "./FetchButton";
import ResultDisplay from "./ResultDisplay";
import "./../styles/CatFactsApp.css";

const CatFactsApp = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="cat-facts-app">
      <h1 className="header">Факты о кошках</h1>
      <FetchButton onResult={setResult} onError={setError} onLoading={setLoading} />
      <ResultDisplay result={result} error={error} loading={loading} />
    </div>
  );
};

export default CatFactsApp;
import React from "react";
import axios from "axios";
import "./../styles/FetchButton.css";

const FetchButton = ({ onResult, onError, onLoading }) => {
  const fetchData = async () => {
    onLoading(true); // Показываем индикатор загрузки
    onResult(null); // Сбрасываем предыдущий текст
    onError(null);  // Сбрасываем сообщение об ошибке

    try {
      const response = await axios.get("https://catfact.ninja/facts");
      if (response.status === 200) {
        const fact = response.data.data[0].fact; // Получаем первый факт
        onResult(fact);
      } else {
        throw new Error(`Unexpected response code: ${response.status}`);
      }
    } catch (err) {
      onError(err.message); //  Обрабатываем ошибку
    } finally {
      onLoading(false); //  Скрываем индикатор загрузки
    }
  };

  return (
    <button className="fetch-button" onClick={fetchData}>
      Вызов кошачьего факта
    </button>
  );
};

export default FetchButton;

import React, { useEffect } from "react";
import GettingStarted from "./Charts/GettingStarted";
import api from "@marcius-capital/binance-api";

const App = () => {
  const fetchData = async () => {
    const data = await api.rest.trades({ symbol: "BTCUSDT", limit: 20 });
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <div>
        <GettingStarted />
      </div>
    </div>
  );
};

export default App;

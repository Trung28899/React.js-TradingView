import { useEffect } from "react";
import { createChart } from "lightweight-charts";
import "./index.css";
import { areaChartData } from "./data";
import { candleStickData } from "./data";

function App() {
  useEffect(() => {
    const tvChartElement = document.getElementById("tvchart");

    if (tvChartElement) {
      const chart = createChart(document.body, {
        width: 1000,
        height: 300,
      });

      const areaSeries = chart.addAreaSeries();
      areaSeries.setData(areaChartData);

      // const candlestickSeries = chart.addCandlestickSeries();
      // candlestickSeries.setData(candleStickData);
    }
  });

  return (
    <div className="tradingView">
      <h2>Trading View</h2>
      <div id="tvchart"></div>
    </div>
  );
}

export default App;

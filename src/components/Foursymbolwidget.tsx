import React, { useEffect } from "react";

const FourSymbolsWidget = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script1.async = true;
    script1.text = JSON.stringify({
      symbol: "BSE:SENSEX",
      width: "350",
      height: "200",
      locale: "in",
      dateRange: "1M",
      colorTheme: "light",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
    });
    document.getElementById("tv-widget-1").appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script2.async = true;
    script2.text = JSON.stringify({
      symbol: "NASDAQ:AAPL",
      width: "350",
      height: "200",
      locale: "in",
      dateRange: "1M",
      colorTheme: "light",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
    });
    document.getElementById("tv-widget-2").appendChild(script2);

    const script3 = document.createElement("script");
    script3.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script3.async = true;
    script3.text = JSON.stringify({
      symbol: "XAUUSD",
      width: "350",
      height: "200",
      locale: "in",
      dateRange: "1M",
      colorTheme: "light",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
    });
    document.getElementById("tv-widget-3").appendChild(script3);

    const script4 = document.createElement("script");
    script4.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script1.async = true;
    script1.text = JSON.stringify({
      symbol: "USDINR",
      width: "350",
      height: "200",
      locale: "in",
      dateRange: "1M",
      colorTheme: "light",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
    });
    document.getElementById("tv-widget-4").appendChild(script4);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div id="tv-widget-1" className="tradingview-widget-container"></div>
      <div id="tv-widget-2" className="tradingview-widget-container"></div>
      <div id="tv-widget-3" className="tradingview-widget-container"></div>
      <div id="tv-widget-4" className="tradingview-widget-container"></div>
    </div>
  );
};

export default FourSymbolsWidget;

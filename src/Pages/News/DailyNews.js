import React from "react";
import { NewsContextProvider } from "./NewsContext";
import "./DailyNews.css";
import News from "../../Components/News/News";
import CHeader from "../../Components/CHeader/CHeader";

function DailyNews() {
  return (
    <div className="daily">
      <NewsContextProvider>
        <CHeader heading="News" />
        <div className="parallax"></div>
        <div className="x">
          <News />
        </div>
      </NewsContextProvider>
    </div>
  );
}

export default DailyNews;

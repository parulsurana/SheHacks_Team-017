import React, { useContext } from "react";
import './News.css';
import { NewsContext } from "../../Pages/News/NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="new">
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
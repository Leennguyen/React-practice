import React from "react"
import './style.css'
const SmallNews = ({ data }) => {
    return (
        <div className="small-news">
            <img src={data.img} alt=""/>
            <h4>{data.title}</h4>
        </div>
    )
}
const MediumNews = ({ data }) => {
    return (
        <div className="medium-news">
            <img src={data.img} alt=""/>
            <h3>{data.title}</h3>
        </div>
    )
}
const LargeNews = ({ data }) => {
    return (
        <div className="large-news">
            <img src={data.img} alt=""/>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
    )
}
const Category = ({ list }) => {
    return (
      <div className="row">
        <div>
          <LargeNews data={list.find((news) => news.size === "large")} />
        </div>
        <div>
          {list
            .filter((news) => news.size === "medium")
            .map((news) => (
              <MediumNews data={news} />
            ))}
        </div>
        <div>
          {list
            .filter((news) => news.size === "small")
            .map((news) => (
              <SmallNews data={news} />
            ))}
        </div>
      </div>
    );
}

export {SmallNews, MediumNews, LargeNews, Category}
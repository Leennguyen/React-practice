import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL_NEWS } from "../util/constants";
import { useNavigate } from "react-router-dom";

function Form({ action, data = null }) {
  const navigate = useNavigate()
  const [news, setNews] = useState({
    id: null,
    img: "",
    title: "",
    description: "",
    size: "small"
  });
  useEffect(() => {
    if (data !== null) setNews(data)
  }, [])
  const postData = async () => {
    const res = await axios.post(API_URL_NEWS, {
      img: news.img,
      title: news.title,
      description: news.description,
      size: news.size
    });
    console.log(res.statusText);
  };
  const putData = async () => {
    const res = await axios.put(API_URL_NEWS + data.id, {
      img: news.img,
      title: news.title,
      description: news.description,
      size: news.size
    });
    console.log(res.statusText);
  }
  const changeHandle = (event) => {
    var name = event.target.name;
    var val = event.target.value;
    setNews({
      ...news,
      [name]: val,
    });
  };
  const create = async (event) => {
    event.preventDefault();
    await postData();
    navigate("/admin")
  };
  const update = async (event) => {
    event.preventDefault();
    await putData();
    navigate("/admin")
  };
  console.log("re-render");
  console.log(news);
  return (
    <form className="form-cre" onSubmit={action === "create" ? create : update} >
      <h1 style={{ textAlign: "center" }}>{action.toUpperCase()}</h1>
      <p>
        Img:{" "}
        <input
          required
          type="text"
          placeholder="enter url"
          name="img"
          onChange={changeHandle}
          defaultValue={news.img}
        ></input>
      </p>
      <p>
        Title:{" "}
        <textarea
          required
          type="text"
          placeholder="enter title"
          name="title"
          rows="5"
          cols="63"
          onChange={changeHandle}
          defaultValue={news.title}
        ></textarea>
      </p>
      <p>
        Description:{" "}
        <textarea
          required
          type="text"
          placeholder="enter description"
          name="description"
          rows="5"
          cols="63"
          onChange={changeHandle}
          defaultValue={news.description}
        ></textarea>
      </p>
      <p>
        Size: <select defaultValue={news.size} name="size" onChange={changeHandle}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </p>
      <button type="submit">Save</button>
    </form>
  );
}
export default Form;

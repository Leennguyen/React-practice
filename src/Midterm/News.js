import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { API_URL_NEWS } from "../util/constants";
import "./style.css";

const News = ({ data, onDeleted, onUpdated }) => {
  const navigate = useNavigate()
  const onDelete = async (id) => {
    await axios.delete(`${API_URL_NEWS}/${id}`);
    onDeleted();
  };

  return (
    <>
      <div style={{margin: "2rem 0"}}>
        <button onClick={() => navigate("create")}>Create new news</button>
      </div>
      <table className="table-admin">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} scope="col">
              Image
            </th>
            <th style={{ textAlign: "center" }} scope="col">
              Title
            </th>
            <th style={{ textAlign: "center" }} scope="col">
              Description
            </th>
            <th style={{ textAlign: "center" }} scope="col">
              Size
            </th>
            <th style={{ textAlign: "center" }} scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((news, index) => (
            <tr key={index}>
              <td>
                <img alt="" src={news.img} style={{width: "10rem"}}/>
              </td>
              <td>{news.title}</td>
              <td>{news.description}</td>
              <td>{news.size}</td>
              <td>
                <div className="btn">
                  <button
                    onClick={ () => {
                      navigate(`/admin/update/${news.id}`)
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={async () => {
                      await onDelete(news.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default News;

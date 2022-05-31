import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
// import { getDefaultNormalizer } from "@testing-library/react";
import { API_URL } from "../util/constants";

function Read() {
  const [data, setData] = useState({
    productList: [],
    isLoaded: false,
  });
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL);
      console.log(res);
      setData({
        isLoaded: true,
        productList: res.data,
      });
    };
    if (!data.isLoaded) {
      getData();
    }
  }, [data]);
  console.log("re-render");

  const onDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  };

  return !data.isLoaded ? (
    <div>Loading...</div>
  ) : (
    data.productList.map((product) => (
      <div className="show-product" key={product.id}>
        <div>
          <img alt="" src={product.img}/>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button>Update</button>
          <button
            onClick={async () => {
              await onDelete(product.id);
              setData({ productList: [], isLoaded: false });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  );
  // if (!data.isLoaded) {
  //     return (<div>Loading...</div>)
  // }
  // return (
  //     data.productList.map(product =>
  //         <div>
  //             {product.name} **** {product.price}
  //         </div>
  //     )
  // )
}
export default Read;
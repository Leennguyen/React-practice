import React,{useState} from "react";
import axios from "axios";
import "./style.css"
import { API_URL } from "../util/constants";

function Create (){
    const [product, setProduct] = useState({
        id: null,
        name: '',
        price: '',
        img: ''
    })
    const postData = async ()=>{
        const res = await axios.post(API_URL,{
            name: product.name, img: product.img, price: product.price
        })
        console.log(res.statusText);
    }
    const changeHandle = (event) => {
        var name= event.target.name
        var val = event.target.value
        setProduct({
            ...product,
            [name]: val  
        })    
    }
    console.log(product);
    const submitHandle = (event) => {
        event.preventDefault()
        postData();
        
    }
    return(
        
        <form className="form-cre" onSubmit={submitHandle}>
        <p>Name: <input required type="text" placeholder="enter name" name="name" onChange={changeHandle}></input></p>
        <p>Img: <input required type="text" placeholder="enter img" name="img" onChange={changeHandle}></input></p>
        <p>Price: <input required type="text" placeholder="enter price" name="price" onChange={changeHandle}></input></p>
        <button type="submit">Submit</button>
    </form>
    )
}
export default Create;
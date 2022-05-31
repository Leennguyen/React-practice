import React, {Component} from "react";
import './product.css';

function clickHandle(){
    alert("Ok")
}
function Product(props){
        return(
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img src={props.link} alt=""/>
                <ul className="list-group">
                    <p>{props.title}</p>
                    <p>$34.55</p>
                </ul>
                <button onClick={clickHandle} className="btn btn-secondary">Details <i className="fas fa-chevron-right" /></button>
                </div>
            </div>
      )
    }
export default Product;
import React, { Component } from 'react'; 
import data from '../../../data';
import product_data from '../../../data'; 
import Item from './Item/Item';
import data from '../../../data';

// class Right extends Component 
// {  render() {
//     var rows = [];
//     for (var i = 0; i < product_data().length; i++) {
//         rows.push(
//             <Item
//                 tenSP={product_data()[i].name}
//                 anh={product_data()[i].img}
//                 chitiet={product_data()[i].detail}>    
//             </Item>
//         );
//     }
//     return (
//         <div id="right-content">
//             <h2>Product:</h2>
//             <div id="products">
//                 {rows}
//                 <div style={{ clear: "both" }} />
//             </div>
//             <div style={{ clear: "both" }} />
//         </div>
//     )
// }
// } 
// export default Right;
//------------------------
// style="{{clear:both}}"
//----------------------
class Right extends Component{
    render(){
        var dis_products = data("products");
        var dis_categories = data("categories");
        var item = [];
        for (let i = 0; i < dis_products.length; i++) {
            item[i] = <Item img = {dis_products[i].img} name = {dis_products[i].name} detail = {dis_products[i].detail} ></Item>
            
        }
        return(
            <div id='right-content'>
                <h2>Product:</h2>
                <div id='products'>
                    {item}
                    <div style={{ clear: "both" }} />
                </div>
                <div style={{ clear: "both" }} />
            </div>
        );

    }
}




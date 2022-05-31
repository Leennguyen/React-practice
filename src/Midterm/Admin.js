// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header';
// import Content from './components/content';
// import Footer from './components/footer';
// import Product from './components/product';
// import Content1 from './components/Content1/Content1'
// import { Component } from 'react';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       <code>Hello world My name's Leen</code>
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

//     <div>
//         <Header></Header>
//         <Product title="SP 1" link="https://i.pinimg.com/originals/26/47/3c/26473c47da0fab3921e36ffe68641cf4.jpg"></Product>
//         <Product title="SP 2" link="https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2019/09/9-HQ-SCAN-Jisoo-Photos-BLACKPINK-Summer-Diary-2019-in-Hawaii-.jpg?fit=791%2C1200&ssl=1"></Product>
//         <Content></Content>
//         <Content1></Content1>
//         <Footer></Footer>

//     </div>
//   );

// }

// export default App;

//___________________________________________________________________________________

// import React,{Component} from "react";
// // import "./assets/css/macbookStyle.css"
// import StateEx from './components/test/StateEx';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             items:[],
//             isLoaded: false,
//         }
//     }

//     componentDidMount() {
//         fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/products')
//             .then(res=> res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json,
//                 })
//             })
//     }

//     // callAPI(){
//     //     this.setState({
//     //         isLoaded: true,
//     //     });
//     //     fetch("https://625bcc9a398f3bc782aed2bb.mockapi.io/products")
//     //         .then(res => res.json())
//     //         .then(
//     //             (result) => {
//     //                 this.setState({
//     //                     isLoaded: false,
//     //                     items: result.items
//     //                 });
//     //             }
//     //         )
//     // }
//     clickHandle(){
//       alert("add thanh cong")
//     }
//     render() {
//         const {isLoaded, items} = this.state;

//         if(!isLoaded){
//             return <div>Loading...</div>;
//         }
//         return (
//             <div>
//                 <h2>MACBOOK SIU XỊN</h2>
//                 <button onClick={this.clickHandle}>this is button </button>
//                 <div className="wrapper">
//                     {/* eslint-disable-next-line array-callback-return */}
//                     {items.map(item => {
//                         return(
//                             <div className="macbook__cart" key={item.id}>
//                                 <img src={item.image} alt=""/>
//                                 <p>{item.title}</p>
//                                 <p>{item.price}</p>
//                                 <p>{item.offer}</p>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div id="root">
//                     <StateEx></StateEx>
//                 </div>
//             </div>

//         );
//     }
// }

// export default App;

//___________________________________________________________
// import { Component } from "react";
// import product_data from './data';

// class Name extends Component {
//     constructor (props){
//         super (props);
//         this.state = {
//             firstName: "Linh",
//             lastName: "Nguyen"
//         };
//     }
//     changeName = () =>{
//         this.setState({firstName: "Thuy"});
//         this.setState({lastName: "Leen"});
//     }
//     render(){
//         return (
//             <div>
//                 <p>Hello my name's {this.state.firstName} {this.state.lastName}</p>
//                 <button type="button" onClick={this.changeName}>Click me</button>
//             </div>
//         )
//     }

// }
// export default Name;
//________________________________________________________
//     this.state = {
//         brand : "A",
//         model : "B",
//         color : "C",
//         year : "D"
//     };
// }
// render() {
//     return (
//         <div>
//             <h1> My {this.state.brand}</h1>
//             <p>
//                 It's a {this.state.color}  -
//                 {this.state.model} -
//                 from {this.state.year}
//             </p>
//         </div>
//         )
//     };
//__________________________________________________________________
// var arr = product_data();
// this.state = {arr};
//     }
//     render (){
//         return (
//             <div>
//                 {this.state.arr.map(key =>
//                     <div>
//                         <h2>{key.name}</h2>
//                         <p>{key.img}</p>
//                         <p>{key.detail}</p>
//                     </div>)
//                 }
//             </div>
//         );
//     }
// }
// export default Name;
// _________________________________________________
// import React, {Component} from "react";
// import product_data from "./data";
// import One from './One';
// class StateEx extends Component{
//     constructor(){
//         super()
//         this.state = product_data()
//     }
//     render(){
//         return (
//             <div>
//                 {this.state.map(key => {
//                     return(<One name={key.name} img={key.img} detail= {key.detail}></One> )
//                 })}
//             </div>
//         )
//     }
// }
// export default StateEx;
//__________________________________

// import React, {Component} from "react";
// import "./assets/css/macbookStyle.css"
// import React, { useState } from 'react';

// function StepTracker() {
//     const [steps, setSteps] = useState(0);
//
//     function changeColor(){
//         setSteps()
//     }
//
//     function increment() {
//         setSteps(prevState => prevState + 1);
//     }
//
//     return (
//         <div>
//             Today you've taken {steps} steps!
//             <br />
//             <button onClick={increment}>
//                 I took another step
//             </button>
//         </div>
//     );
// }
//khai báo giá trị bên trong đối tượng cần lọc

// function App() {
//     const [count, setCount] = useState(3);
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             items:[],
//             isLoaded: false,
//             categoryID: [],
//         }
//     }

//     componentDidMount() {
//         fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/categories')
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     categoryID: json,
//                 })
//             })
//         fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/products')
//             .then(res=> res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json,
//                 })
//             })
//     }
//     clickHandler(title){
//         alert("Successfull order" + title)
//     }

//     discountCalculate(price, discountPrice){
//         return (price / discountPrice).toFixed(2) * 100
//     }
//     render() {
//         const {isLoaded, items, categoryID} = this.state;

//         if(!isLoaded){
//             return <div>Loading...</div>;
//         }
//         return (
//             <div>
//                 <h2>CHON LOAI HANG</h2>
//                     <section>
//                         {/*{categoryID.map(ele =>{*/}
//                         {/*    return(*/}
//                         {/*        <button onClick={() => {this.setState({...this.state,{ele.cateID}: 1})}}>{ele.cateName}</button>*/}
//                         {/*    )*/}
//                         {/*})}*/}
//                         <button onClick={() => {this.setState({categoryID: 1})}}>macbook</button>
//                         <button onClick={() => {this.setState({categoryID: 3})}}>ipad</button>
//                         <button onClick={() => {this.setState({categoryID: 2})}}>iphone</button>
//                     </section>
//                 <div className="wrapper">
//                     {items.filter(item => item.categoryID === categoryID)
//                         .map(item =>{
//                                 return(
//                                     <div className="macbook__cart" key = {item.id}>
//                                         <img src={item.image} alt=""/>
//                                         <span>{() => this.discountCalculate(item.price,item.discountPrice)}</span>
//                                         <h3>{item.title}</h3>
//                                         <p className="price">{item.price}</p>
//                                         <p className="discountPrice">{item.discountPrice}</p>
//                                         <p className="offer">{item.offer}</p>
//                                         <button onClick={() => this.clickHandler(item.title)}>Buy now</button>
//                                     </div>
//                                 )
//                             }
//                         )
//                     }
//                 </div>
//             </div>

//         );
//     }
// }
// export default App;
// ______________________________________________________
// import React, {Component} from "react";
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {txtUserName: '', headerUsername: '' };
//   }
//   mySubmitHandler = (event) =>{
//     event.preventDefault();
//     alert("You are submiting " + this.state.txtUserName);
//     this.setState({headerUsername: this.state.txtUserName})
//   }
//   myChangeHandler = (event) =>{
//     this.setState({txtUserName: event.target.value});
//   }
//   render(){
//     return(
//       <form onSubmit={this.mySubmitHandler}>
//           <h1>Hello {this.state.headerUsername}</h1>
//           <p>Enter your name and submit</p>
//           <input type="text"onChange={this.myChangeHandler}></input>
//           <input type='submit'></input>
//       </form>
//     )
//   }
// }
// export default App;
//__________________________________________________________
// import React, {Component} from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: 'Initial data...'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState(e){
//         this.setState({data: e.target.value})
//     }
//     render() {
//         return (
//             <div>
//                 <Content myDataProp = {this.state.data}
//                 updateStateProp = {this.updateState}/>
//             </div>
//         );
//     }
// }

// class Content extends Component {
//     render() {
//         return (
//             <div>
//                 <input type="text" value = {this.props.myDataProp}
//                 onChange={this.props.updateStateProp}/>
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         );
//     }
// }

// export default App;\
// ___________________________________________________________________
// import React, { Component } from "react";
// import Score from "./Score";
// class App extends Component{
//   render(){
//     return(
//       <Score></Score>
//     )
//   }
// }
// export default App;
// ______________________________________________________________________
// import React, { Component } from "react";
// import Menu from "./CoffeeShop";
// import CoffeeShop from "./CoffeeShop";

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Menu></Menu>
//         <CoffeeShop></CoffeeShop>
//       </div>
//     )
//   }
// }
// export default App;
//_______________________________________________________
// import React, { Component } from "react";
// import Create from "./component1/Create";
// import Read from "./component1/Read";
// // import Update from "./component1";
// // import Delete from "./component1";
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Create></Create>
//         <Read></Read>
//       </div>
//     )
//   }
// }
// export default App;
// _________________________________________
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL_NEWS } from "../util/constants";
import News from "./News";
const App = () => {
  const [data, setData] = useState({
    newsList: [],
    isLoaded: false,
  });
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL_NEWS);
      setData({
        isLoaded: true,
        newsList: res.data,
      });
    };
    if (!data.isLoaded) {
      getData();
    }
  }, [data]);
  const reloadHandler = () => {
    setData({isLoaded: false})
  };
  return !data.isLoaded ? (
    <div>Please wait !</div>
  ) : (
    <div>
      <div className="contain">
        <News data={data.newsList} onDeleted={reloadHandler} onUpdated={reloadHandler}></News>
      </div>
    </div>
  );
};
export default App;

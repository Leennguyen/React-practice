import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    render(){
        return(
            <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/Assets/css/homePage.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
            <link rel="stylesheet" href="m.me/302869896864999" />
            <title>Luxury</title>
            {/* MENU */}
            <div className="container">
              <div className="menu">
                <nav className="nav_menu">
                  <div><img className="logo" src="https://lelap1702.github.io/selling-jewellry/assets/images/img/logo1.png" alt="" /></div>
                  <div><ul className="main_menu">
                      <li><a href><b>home</b></a></li>
                      <li><a href><b>about us</b></a></li>
                      <li><a href><b>new arrivals</b></a></li>
                      <li>
                        <a href><b>products</b> <i className="fas fa-angle-down"> </i></a>
                        <ul className="sub_menu">
                          <li><a href>necklace</a></li>
                          <li><a href>bracelet</a></li>
                          <li><a href>anklet</a></li>
                          <li><a href>ring</a></li>
                          <li><a href>earring</a></li>
                        </ul>
                      </li>
                      <li><a href><b>size chart</b></a></li>
                      <li>
                        <a href><b>contact</b> <i className="fas fa-angle-down" /></a>
                        <ul className="sub_menu">
                          <li><a href>store</a></li>
                          <li><a href>facebook</a></li>
                          <li><a href>instagram</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>                
                  <div className="icon_menu"><button><i className="bi bi-person" /></button> <label htmlFor="nav_input" className="search_btn"><i id="bi1" className="bi bi-search" /></label> <button> <label htmlFor="nav_cart"><i className="bi bi-cart2" /></label></button></div>
                  <label htmlFor="nav_line" className="line3">
                    <div />
                    <div />
                    <div />
                  </label>
                  <input type="checkbox" hidden className="nav_input_line" id="nav_line" />
                  <label htmlFor="nav_line" className="nav_overlay_line" />
                  <div className="lineRespon">
                    <p className>MENU <label htmlFor="nav_line" id="close"><i className="bi bi-x-circle-fill" /></label></p>
                    <div><ul className="right_menu">
                        <li><a href><b>home</b></a></li>
                        <li><a href><b>about us</b></a></li>
                        <li><a href><b>new arrivals</b></a></li>
                        <li>
                          <a href><b>products</b> <i className="fas fa-angle-down"> </i></a>
                          <ul className="right_sub_menu">
                            <li><a href>necklace</a></li>
                            <li><a href>bracelet</a></li>
                            <li><a href>anklet</a></li>
                            <li><a href>ring</a></li>
                            <li><a href>earring</a></li>
                          </ul>
                        </li>
                        <li><a href><b>size chart</b></a></li>
                        <li>
                          <a href><b>contact</b> <i className="fas fa-angle-down" /></a>
                          <ul className="right_sub_menu">
                            <li><a href>store</a></li>
                            <li><a href>facebook</a></li>
                            <li><a href>instagram</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* SEARCH */}
                  <input type="checkbox" hidden name className="nav_input_search" id="nav_input" />
                  <label htmlFor="nav_input" className="nav_overlay_search" />
                  <div className="search" id="search-id">
                    <div className="search_into">
                      <p>SEARCH <label htmlFor="nav_input" id="close"><i className="bi bi-x-circle-fill" /></label></p>
                      <p className="Psearch"><input id="searchInput" type="text" placeholder="Search products.." onkeyup="searchPro()" /><button id="buttonSearch"><i className="bi bi-search" /></button></p>
                      <div id="searchProName">
                        <div id="userSearch" />
                        <div id="listSearchProName" />
                      </div>
                    </div>
                  </div>
                  {/* CART */}
                  <input type="checkbox" hidden className="nav_input_cart" id="nav_cart" />
                  <label htmlFor="nav_cart" className="nav_overlay_cart" />
                  <div className="cart" id="cart-id">
                    <div className="cart_into">
                      <p className>CART <label htmlFor="nav_cart" id="close"><i className="bi bi-x-circle-fill" /></label></p><p />    
                    </div>
                    <div className="cartDetails">
                      <div className="containPro">
                        {/* <table id="tableProView">
                                    <tbody>
                                        <tr>
                                            <td class="imgProCart"></td>
                                            <td class="infProCart"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr> */}
                        <table id="tableCartView">
                          <tbody>
                            <tr>
                              <td><p>There is nothing on the cart right now</p></td>
                            </tr>
                          </tbody>
                        </table>
                        <hr />
                        <table id="tableTotal">
                          <tbody>
                            <tr>
                              <td className="textTotalRight">TOTAL:</td>
                              <td className="texttotalLeft" />
                            </tr>
                          </tbody>
                        </table>
                        <table id="tableButton">
                          <tbody><tr>
                              <td><a href="./cart.html"><button id="cart_btn">VIEW SHOPPING CART</button></a></td>
                              <td><button>PAYMENT</button></td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                  </div>
                </nav>
              </div> 
              <div className="hollow" />
            </div>
          </div>
          )
    }
}
export default Header;
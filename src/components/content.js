import React,{Component} from "react";
import './content.css';
class Content extends Component{
    render(){return (<div>
        <div className="slider">
          <div className="slides">
            {/*button start  */}
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            {/*button end  */}
            {/* slider img statr */}
            <div id="slides_img" className="slide first">
              <img src="https://kpopping.com/documents/34/3/3465/Rose-for-Tiffany-Co-Tiffany-HardWear-documents-6(1).jpeg" alt="" />
            </div>
            <div id="slides_img" className="slide ">
              <img src="https://images.squarespace-cdn.com/content/v1/533de1d1e4b099c54d48e3e1/1621691604941-3S1GD0Q9FJDCJVX7130R/Model_6_52-crop-web.jpg" alt="" />
            </div>
            <div id="slides_img" className="slide">
              <img src="https://assets.vogue.com/photos/5f5f85d23a69c0493d8b1b0f/master/w_2560%2Cc_limit/Ana__NDC__1.jpg" alt="" />
            </div>
            <div id="slides_img" className="slide">
              <img src="https://www.russh.com/wp-content/uploads/2022/03/bvlgari2.jpg" alt="" />
            </div>
            {/* slider img end */}
            {/*navigation start  */}
            <div className="navigation-auto">
              <div className="auto-btn1" />
              <div className="auto-btn2" />
              <div className="auto-btn3" />
              <div className="auto-btn4" />
            </div>
            {/*navigation end  */}
            {/* manual navigation start */}
            <div className="navigation-manual">
              <label htmlFor="radio1" className="manual-btn" id="manual-btn" />
              <label htmlFor="radio2" className="manual-btn" id="manual-btn" />
              <label htmlFor="radio3" className="manual-btn" id="manual-btn" />
              <label htmlFor="radio4" className="manual-btn" id="manual-btn" />
            </div>
            {/* manual navigation end */}
          </div>
        </div>
        <div className="allProducts">
          <div className="pro_newArrival">
            <h2>necklaces New arrivals </h2>
            <hr /><br />
            <hr className="line1" />
            <div className="adPro1">
              <div id="adPro1-img">
                <img src="https://media.vogue.co.uk/photos/61ba354c2e6d06cbe87de23b/2:3/w_1920,c_limit/SS_VOGUE_SH02_f7%20copy.jpg" alt="" />
              </div>
              <div id="adPro1-text"><p>JEWELLERY</p><br /> 5 Major Necklace Trends To Keep Track Of In 2022 <br /> <hr />
                <p>14 JANUARY 2022</p>
              </div>
            </div>
            <div className="productsSection1">
              <div className="proCard1">
                <div id="displayPro1-left" />
                <div id="displayPro1-right-img">
                  <p><span id="n">Ne</span>cklace</p>
                  <img src="https://k-luv.leonparenzo.com/wp-content/uploads/2020/07/heres-the-true-cost-of-blackpink-lisas-bvlgari-jewelry.jpg" alt="" />
                </div>
              </div>
            </div>
          </div> 
          <div className="pro_dailyOffer">
            <h2>Rings New arrivals </h2>
            <hr />
            <div className="adPro2">
              <div id="adPro2-text"><span>R I</span><span id="ng"> N G</span></div>
              <div id="adPro2-img">
                <img src="https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_1980/v1637947392/homepage/Monday-drop/2021/December/64_Charlotte_DT" alt="" />
              </div>
            </div>
            <div className="productsSection2">
              <div className="proCard2">
                <div id="displayPro2-bottom" />
              </div>
            </div>
          </div>
        </div>
        <div className="content_banner">
          <div className="banner_img" id="banner_img">
            <h2>2LTU LUXURY</h2>
            <hr />
            <img src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-victoriaearrings-23954168_997901_ED_M-23954168_1028075_SV_1.jpg?hei=480&wid=480" alt="" />
            <img src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-ring-67796659_1013904_ED_M-67796659_1012020_SV_1_M.jpg?hei=480&wid=480" alt="" />
            <img src="https://media.tiffany.com/is/image/tiffanydm/holiday-OnFig-Bracelet2-alt2?$tile$&wid=1488&hei=1488" alt="" />
            <img src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/palomas-graffitilove-pendant-26189993_928743_ED_M-33476744_1029633_SV_1.jpg?hei=480&wid=480" alt="" />                    
            <img src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/palomas-graffitilove-ring-60571422_1031022_ED_M-60571422_1031023_SV_1_M.jpg?hei=480&wid=480" alt="" />
            <img src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-victoriaearrings-38050982_1031018_ED-38050982_1031019_SV_1.jpg?hei=480&wid=480" alt="" />
          </div>
        </div>
      </div>)
      }
        
    }
export default Content;
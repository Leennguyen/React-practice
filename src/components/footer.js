import React,{Component} from "react";
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <div>
        <div className="footer">
          <div />
          <div className="slogan">
            <h3>2ltu Luxury</h3>
            <p>2LTU Luxury Jewelry is a pioneer in the field of jewelry accessories specializing in necklaces, rings, bracelets with a variety of materials designed according to the shop's own style. Established in 2000, Luxury Jewelry has provided millions of products to all Vietnamese and foreign customers with the desire to bring the best value to users.</p>
            <img className="logo" src="https://lelap1702.github.io/selling-jewellry/assets/images/img/logo1.png" alt="" />
            <p className="slogan_icon"><a href="https://www.youtube.com/watch?v=X1vfCsJ6hAU"><i className="fab fa-facebook" /></a> <a href><i className="fab fa-instagram" /></a></p>
          </div>
          <div className="menu_footer">
            <h3>Main menu</h3>
            <p>- home</p>
            <p>- About us</p>
            <p>- new arrivals</p>
            <p>- products</p>
            <p>- size chart</p>
            <p>- contact</p>
          </div>
          <div className="contact_information">
            <h3>contact information</h3>
            <p>- Address: 101B,Le Huu Trac, Son Tra, Da Nang, Viet Nam</p>
            <p>- Phone number: 1900633513</p>
            <p>- Email: luxury2ltu@gmail.com</p>
            <p>- Facebook: 2ltu Luxury</p>
            <p>- Instagram: 2ltu_luxury</p>
          </div>
          <div className="fanpage">
            <h3>fanpage</h3>
            <div id="fb-root" />
            <div className="fb-page" data-href="https://www.facebook.com/Y-Ê-U-Đ-Ơ-N-P-H-Ư-Ơ-N-G-302869896864999/" data-tabs="timeline" data-width="300px" data-height="250px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Y-Ê-U-Đ-Ơ-N-P-H-Ư-Ơ-N-G-302869896864999/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Y-Ê-U-Đ-Ơ-N-P-H-Ư-Ơ-N-G-302869896864999/">2LTU Luxury</a></blockquote></div>
          </div>
        </div>
        <hr />
        <div>
          <p className="end">Copyright © 2021 2LTU Luxury. Powered by Haravan</p>
        </div>
      </div>
        )
    }
}
export default Footer;
import React from "react";
import './HeaderTop.css';
function HeaderTop() {
    return(
        <div className="hihi">
            <div className="header-top">
                <div className="header-top-descrip"><img src="https://vov.vn/themes/custom/vovvn/logo.svg" alt="" style={{width: '147px', height: '50px'}} /></div>
                <div className="header-top-descrip"><p>Thứ Tư, ngày 1 tháng 12 năm 2021</p></div>
                <div className="header-top-descrip"><button><b>Nghe &amp; Xem</b><i className="fas fa-play-circle" /></button></div>
                <div className="header-top-descrip"><b>English</b></div>
                <div className="header-top-descrip"><input type="text" /><i className="fas fa-search" /></div>
            </div>
        </div>
    )
}
export default HeaderTop;
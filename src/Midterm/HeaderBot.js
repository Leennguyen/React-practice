import React from "react";
import { Link } from "react-router-dom";
import './HeaderBot.css'
function HeaderBot() {
    return (
      <nav>
        <ul>
          {/* <li><div><i className="fas fa-home" /></div></li> */}
          <li className="link">
            <Link to="/">
              <b>TRANG CHỦ</b>
            </Link>
          </li>
          <li>
            <b>
              <div>Xã Hội</div>
            </b>
          </li>
          <li>
            <b>
              <div>Thế giới</div>
            </b>
          </li>
          <li>
            <b>
              <div>Kinh tế</div>
            </b>
          </li>
          <li>
            <b>
              <div>Thể thao</div>
            </b>
          </li>
          <li>
            <b>
              <div>Văn hóa</div>
            </b>
          </li>
          <li>
            <b>
              <div>Giải trí</div>
            </b>
          </li>
          <li>
            <b>
              <div>Pháp luật</div>
            </b>
          </li>
          <li>
            <b>
              <div>Du lịch</div>
            </b>
          </li>
          <li>
            <b>
              <div>Quân sự-Quốc phòng</div>
            </b>
          </li>
          <li>
            <b>
              <div>Sức khỏe</div>
            </b>
          </li>
          <li>
            <b>
              <div>Đời sống</div>
            </b>
          </li>
          <li className="link">
            <Link to="/admin">
              <b>ADMIN</b>
            </Link>
          </li>
        </ul>
      </nav>
    );
}
export default HeaderBot;
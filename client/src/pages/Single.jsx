import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.cnet.com/a/img/resize/7131a068d344cd9a20b116c089934d66002d6503/hub/2022/03/24/81a6bf34-a2d6-4103-b474-04ca7c390e9e/the-sun-in-high-resolution-lower-resolution.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt=""
        />
        <div className="user">
          <img
            src="https://www.cnet.com/a/img/resize/7131a068d344cd9a20b116c089934d66002d6503/hub/2022/03/24/81a6bf34-a2d6-4103-b474-04ca7c390e9e/the-sun-in-high-resolution-lower-resolution.jpg?auto=webp&fit=crop&height=675&width=1200"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 3 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <br/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

import Star from "../../assets/icon/star.svg";
import { Link } from "react-router-dom";
import "./StarButton.css";
import React from "react";

function StarButton() {
  return (
    <Link className="star-button" to={""}>
      <img src={Star} alt="즐겨찾기 버튼" />
    </Link>
  );
}
export default StarButton;
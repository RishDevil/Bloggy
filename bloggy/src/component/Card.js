import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import priya from "./priy.jpg";
import { Link } from "react-router-dom";
import jquery from "jquery";
import { Buffer } from "Buffer";
import { Base64 } from "base-64";
// or if you prefer no Base64 namespace
import { encode, decode } from "js-base64";

const Card = (props) => {
  useEffect(() => {
    var base64Flag = "data:image/jpeg;base64,";
    var imageStr = arrayBufferToBase64(props.data.image.data.data);

    console.log("iamgeee", imageStr);
    setimg(base64Flag + imageStr);
  }, []);
  const [img, setimg] = useState("");

  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };
  console.log(props.data.image.data.data, "image datat");
  const mouseMove = () => {
    jquery(`.${styles.card_container}`).on("mousemove", function (e) {
      var x = -(
        jquery(this).height() / 2 +
        jquery(this).offset().top -
        e.pageY
      );
      var y = jquery(this).width() / 2 + (jquery(this).offset().left - e.pageX);

      jquery(this).css({
        transform:
          "scale(1.1) perspective(600px) rotateX(" +
          x / 20 +
          "deg) rotateY(" +
          y / 20 +
          "deg)",
      });
    });
  };

  const mouseLeave = () => {
    jquery(`.${styles.card_container}`).css({
      transform:
        "scale(1) perspective(600px) rotateX(" +
        0 +
        "deg) rotateY(" +
        0 +
        "deg)",
    });
  };

  return (
    <div
      className={styles.card_container}
      onMouseOut={mouseLeave}
      onMouseMove={mouseMove}
    >
      <Link
        to={"/fulldes/" + props.data._id}
        className={styles.link}
        style={{ textDecoration: "None" }}
      >
        <img src={img} className={styles.card_img}></img>{" "}
        <div className={styles.title}>{props.data.title.toUpperCase()}</div>
        <div className={styles.country}>{props.data.country.toUpperCase()}</div>
        <div className={styles.place}> {props.data.place.toUpperCase()}</div>
        <div className={styles.sub_description}>{props.data.sub_des}</div>
      </Link>
    </div>
  );
};

export default Card;

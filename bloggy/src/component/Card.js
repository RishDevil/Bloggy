import React, { useState, useEffect, memo } from "react";
import styles from "./Home.module.css";

import { Link } from "react-router-dom";
import jquery from "jquery";

const Card = (props) => {
  console.log("Card");
  const [img, setimg] = useState("");

  useEffect(() => {
    console.log("Card effect");
    var base64Flag = "data:image/jpeg;base64,";
    var imageStr = arrayBufferToBase64(props.data.image.data.data);

    setimg(base64Flag + imageStr);
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

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
      data-aos="fade-up"
      data-aos-offset="250"
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

export default memo(Card);

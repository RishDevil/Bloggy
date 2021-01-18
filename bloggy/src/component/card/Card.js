import React, { useState, useEffect, memo } from "react";
import styles from "../home/Home.module.css";

import { Link } from "react-router-dom";
import jquery from "jquery";

const Card = (props) => {
  console.log("Card");
  const [img, setimg] = useState("");

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

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
      data-aos="zoom-out-up"
      data-aos-offset="250"
    >
      <Link
        to={"/fulldes/" + props.data._id}
        className={styles.link}
        style={{ textDecoration: "None" }}
      >
        <img src={props.data.image.url} className={styles.card_img}></img>{" "}
        <div className={styles.title}>{props.data.title.toUpperCase()}</div>
        <div className={styles.country}>{props.data.country.toUpperCase()}</div>
        <div className={styles.place}> {props.data.place.toUpperCase()}</div>
        <div className={styles.sub_description}>{props.data.sub_des}</div>
      </Link>
    </div>
  );
};

export default memo(Card);

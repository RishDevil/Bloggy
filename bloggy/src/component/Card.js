import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import priya from "./priy.jpg";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className={styles.card_container}>
      <Link
        to={"/fulldes/?data=" + data._id}
        className={styles.link}
        style={{ textDecoration: "None" }}
      >
        <img src={data.image} className={styles.card_img}></img>{" "}
        <div className={styles.title}>{data.title.toUpperCase()}</div>
        <div className={styles.country}>{data.country.toUpperCase()}</div>
        <div className={styles.place}> {data.place.toUpperCase()}</div>
        <div className={styles.sub_description}>{data.sub_des}</div>
      </Link>
    </div>
  );
};

export default Card;

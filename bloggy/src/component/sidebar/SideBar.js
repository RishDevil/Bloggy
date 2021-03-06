import React, { useState, useEffect } from "react";
import styles from "../home/Home.module.css";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
const SideBar = (props) => {
  const userInfo = Cookie.getJSON("userInfo");
  return (
    <div
      className={
        props.toggle
          ? [styles.sidebar, styles.sidebaropen].join(" ")
          : styles.sidebar
      }
    >
      <ul className={styles.ul}>
        {userInfo ? (
          <Link to="/create" style={{ textDecoration: "None" }}>
            <li className={styles.li} onClick={props.click}>
              create post
            </li>
          </Link>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default SideBar;

import React, { useState, useEffect } from "react";
import styles from "./FullDes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { blogDetailAction } from "../action/Blog";

const FullDes = (props) => {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const data = params.get("data");

  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogDetail);

  useEffect(() => {
    dispatch(blogDetailAction(data));
  }, []);
  console.log(blog);
  return (
    <React.Fragment>
      {blog ? (
        <div className={styles.full_des}>
          <div className={styles.image}>
            <img src={blog.image} className={styles.img} />
          </div>
          <div className={styles.upper}>
            <span>{blog.title}</span>
            <table>
              <tr>
                <td>Place</td>
                <td>{blog.place}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{blog.country}</td>
              </tr>
            </table>
          </div>

          <div className={styles.des}>{blog.des}</div>
        </div>
      ) : (
        "loading....."
      )}
    </React.Fragment>
  );
};

export default FullDes;

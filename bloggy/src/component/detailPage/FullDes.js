import React, { useState, useEffect } from "react";
import styles from "./FullDes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { blogDetailAction } from "../../action/Blog";

const FullDes = (props) => {
  console.log("Full Des");

  const id = props.match.params.id;

  const dispatch = useDispatch();

  const { blog } = useSelector((state) => state.blogDetail);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  useEffect(() => {
    dispatch(blogDetailAction(id));
  }, [id]);

  return (
    <React.Fragment>
      {blog ? (
        <div className={styles.full_des} data-aos="fade-up">
          <div className={styles.image}>
            <img
              src={blog.image ? blog.image.url : ""}
              className={styles.img}
            />
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

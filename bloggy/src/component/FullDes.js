import React, { useState, useEffect } from "react";
import styles from "./FullDes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { blogDetailAction } from "../action/Blog";

const FullDes = (props) => {
  console.log("Full Des");

  const id = props.match.params.id;

  const dispatch = useDispatch();

  const { blog } = useSelector((state) => state.blogDetail);

  const [img, setimg] = useState("");

  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  useEffect(() => {
    dispatch(blogDetailAction(id));
  }, []);

  useEffect(() => {
    if (
      JSON.stringify(blog) !== JSON.stringify({}) &&
      typeof blog != "undefined"
    ) {
      console.log(blog, "bloggy");
      var base64Flag = "data:image/jpeg;base64,";
      var imageStr = arrayBufferToBase64(blog.image.data.data);

      setimg(base64Flag + imageStr);
    }
  }, [blog]);

  return (
    <React.Fragment>
      {blog ? (
        <div className={styles.full_des} data-aos="fade-up">
          <div className={styles.image}>
            <img src={img} className={styles.img} />
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

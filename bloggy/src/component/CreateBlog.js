import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CreateBlog.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  blogDeleteAction,
  blogList,
  blogUpdateAction,
  blogCreateAction,
} from "../action/Blog";

const CreateBlog = () => {
  const [title, settitle] = useState("");
  const [place, setplace] = useState("");
  const [country, setcountry] = useState("");
  const [image, setimage] = useState("");
  const [sub_des, setsub_des] = useState("");
  const [des, setdes] = useState("");
  const [upload, setupload] = useState(false);
  const [data, setdata] = useState([]);
  const [change, setchange] = useState("");
  const [id, setid] = useState(null);
  const dispatch = useDispatch();
  const { del, error } = useSelector((state) => state.blogDelete);
  const { blog } = useSelector((state) => state.blogList);
  const { sav } = useSelector((state) => state.blogUpdates);
  const { created } = useSelector((state) => state.blogCreate);
  console.log(del, "delll");

  const [create, setcreate] = useState(false);
  useEffect(() => {
    setcreate(false);
  }, [created, sav]);
  useEffect(() => {
    dispatch(blogList());
  }, [change, del, created, sav]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && sub_des && place && country && image && des) {
      console.log("image", image);

      alert("filled", title);
      if (id) {
        dispatch(
          blogUpdateAction(id, title, sub_des, place, country, image, des)
        );
      } else {
        dispatch(blogCreateAction(title, sub_des, place, country, image, des));
      }
    } else {
      alert("fill all details");
    }
  };
  const uploads = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setupload(true);
    axios
      .post("/api/uploads/", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("pic");
        setupload(false);
        setimage(response.data);
      })
      .catch((err) => {
        setupload(false);
      });
  };
  const UpdateBlog = (blog) => {
    setcreate(true);
    setModel(blog);
  };
  const setModel = (blog) => {
    setid(blog._id);
    settitle(blog.title);
    setsub_des(blog.sub_des);
    setdes(blog.des);
    setimage(blog.image);
    setplace(blog.place);
    setcountry(blog.country);
  };
  const openCreate = () => {
    setcreate(true);
    setModel({});
  };

  const DeleteBlog = (id) => {
    dispatch(blogDeleteAction(id));
    if (del) {
      setchange(del);
    }
  };

  return (
    <div className={styles.contain}>
      <div className={StyleSheet.create}>
        {create ? "" : <button onClick={() => openCreate()}>create</button>}
        {create ? (
          <div>
            <button onClick={() => setcreate(false)}>cancel</button>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => settitle(e.target.value)}
                value={title}
                placeholder="title"
              />
              <br /> <br />
              <input
                type="text"
                onChange={(e) => setsub_des(e.target.value)}
                value={sub_des}
                placeholder="short description"
              />
              <br /> <br />
              <input
                type="text"
                onChange={(e) => setplace(e.target.value)}
                value={place}
                placeholder="place"
              />
              <br /> <br />
              <input
                type="text"
                onChange={(e) => setcountry(e.target.value)}
                value={country}
                placeholder="country"
              />
              <br /> <br />
              <input
                type="text"
                onChange={(e) => setimage(e.target.value)}
                value={image}
                placeholder="image"
                contentEditable="false"
              />
              <br /> <br />
              <textarea
                type="text"
                onChange={(e) => setdes(e.target.value)}
                value={des}
                placeholder="description"
                style={{ width: "700px", height: "200px" }}
              />
              <br /> <br />
              {upload && <div> upload...</div>}
              <input type="file" onChange={uploads} />
              <br /> <br />
              {title && sub_des && place && country && image && des ? (
                <button type="submit">{id ? "Update" : "Create"}</button>
              ) : (
                ""
              )}
              <br />
              <br />
            </form>
            <img
              src={"/uploads/" + image}
              style={{ width: "200px", height: "200px" }}
            />{" "}
            <br /> <br />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.blog}>
        <ul className={styles.ul}>
          <li className={styles.li}>Blogs</li>
          {blog &&
            blog.map((blog) => (
              <div>
                {" "}
                <li className={styles.li}>
                  <p>
                    Title:{"  "}
                    {blog.title}
                    <br />
                    Date: {blog.created_at.substring(0, 10)}
                    <br />
                    <button onClick={() => UpdateBlog(blog)}>Update</button>
                    <br />
                    <button onClick={() => DeleteBlog(blog._id)}>Delete</button>
                  </p>
                </li>
                <br />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateBlog;

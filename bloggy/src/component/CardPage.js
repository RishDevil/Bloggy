import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import jquery from "jquery";
import priya from "./priy.jpg";
import Card from "./Card";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { blogList, blogSearchAction } from "../action/Blog";

const CardPage = (props) => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogList);
  const { search } = useSelector((state) => state.blogSearch);
  const [data, setdata] = useState([]);
  const [newData, setnewData] = useState();
  const [error, seterror] = useState("");

  useEffect(() => {
    dispatch(blogList());
    if (search && blog) {
      setnewData(
        blog.filter(
          (cd) => cd.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
        )
      );
      console.log(newData, "new ", data);
    }
  }, [search]);
  const [getdata, setgetdata] = useState(false);

  return (
    <div
      className={
        props.toggle ? [styles.card, styles.cardscale].join(" ") : styles.card
      }
    >
      {blog &&
        (search && newData ? newData : blog).map((cd) => (
          <Card key={cd._id} data={cd} />
        ))}
    </div>
  );
};

export default CardPage;

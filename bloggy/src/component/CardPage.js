import React, { useState, useEffect, memo } from "react";
import styles from "./Home.module.css";

import Card from "./Card";

import { useSelector, useDispatch } from "react-redux";
import { blogList, blogSearchAction } from "../action/Blog";

const CardPage = (props) => {
  console.log("Cardpage");
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogList);
  const { search } = useSelector((state) => state.blogSearch);
  const [data, setdata] = useState([]);
  const [newData, setnewData] = useState();
  const [error, seterror] = useState("");

  useEffect(() => {
    console.log("Card page effect");
    dispatch(blogList());
    if (search && blog) {
      setnewData(
        blog.filter(
          (cd) => cd.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
        )
      );
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

export default memo(CardPage);

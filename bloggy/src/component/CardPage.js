import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import jquery from "jquery";
import priya from "./priy.jpg";
import Card from "./Card";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { blogList, blogSearchAction } from "../action/Blog";

const CardPage = (props) => {
  console.log("cardPage");
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogList);
  const { search } = useSelector((state) => state.blogSearch);
  const [data, setdata] = useState([]);
  const [newData, setnewData] = useState();
  const [error, seterror] = useState("");

  useEffect(() => {
    console.log("bloglist");
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
  useEffect(() => {
    jquery("document").ready(function () {
      jquery(`.${styles.card_container}`).on("mousemove", function (e) {
        console.log("enter");
        var x = -(
          jquery(this).height() / 2 +
          jquery(this).offset().top -
          e.pageY
        );
        var y =
          jquery(this).width() / 2 + (jquery(this).offset().left - e.pageX);

        jquery(this).css({
          transform:
            "scale(1.1) perspective(600px) rotateX(" +
            x / 20 +
            "deg) rotateY(" +
            y / 20 +
            "deg)",
        });
      });

      jquery(`.${styles.card_container}`).on("mouseout", function (e) {
        console.log("out");
        jquery(this).css({
          transform:
            "scale(1) perspective(600px) rotateX(" +
            0 +
            "deg) rotateY(" +
            0 +
            "deg)",
        });
      });
    });
  });
  console.log("cardpage", props.data, "teller  ", props.teller);
  console.log(blog, "cadrpage");
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

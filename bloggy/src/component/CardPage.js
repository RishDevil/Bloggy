import React, { useState, useEffect, useMemo, memo, useRef } from "react";
import styles from "./Home.module.css";

// import Card from "./Card";
import loadable from "@loadable/component";
import { useSelector, useDispatch } from "react-redux";
import { blogList, blogSearchAction } from "../action/Blog";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const Card = loadable(() => import("./Card"));

const CardPage = (props) => {
  console.log("Cardpage");
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogList);
  const { search } = useSelector((state) => state.blogSearch);
  const [data, setdata] = useState([]);
  const [newData, setnewData] = useState();
  const [error, seterror] = useState("");
  const scroll = useRef(null);

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
  useEffect(() => {
    gsap.fromTo(
      scroll.current,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: scroll.current,
          start: "top center+=100",
          end: "top center+=50",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div
      className={
        props.toggle ? [styles.card, styles.cardscale].join(" ") : styles.card
      }
    >
      <div ref={scroll} className={styles.scroll} style={{ color: "red" }}>
        scroll down
      </div>

      {blog &&
        (search && newData ? newData : blog).map((cd) => (
          <Card key={cd._id} data={cd} />
        ))}
    </div>
  );
};

export default memo(CardPage);

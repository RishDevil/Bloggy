import React, { useState, useEffect, Suspense } from "react";
import styles from "./Home.module.css";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SideBar from "../sidebar/SideBar";
import CardPage from "../cardContain/CardPage";
import { Link } from "react-router-dom";
import priya from "../priya.jpg";
import jquery from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { blogList, blogSearchAction } from "../../action/Blog";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Home = (props) => {
  console.log("Home");

  const [toggle, settoggle] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  const handleOpen = () => {
    if (toggle) {
      settoggle(false);
    } else {
      settoggle(true);
    }
  };

  const handleOpen2 = () => {
    if (toggle2) {
      settoggle2(false);
    } else {
      settoggle2(true);
    }
  };

  const dispatch = useDispatch();
  // const { blog } = useSelector((state) => state.blogList);
  // const { search } = useSelector((state) => state.blogSearch);
  // const [data, setdata] = useState([]);
  // const [newData, setnewData] = useState();
  // const [error, seterror] = useState("");
  // useEffect(() => {
  //   dispatch(blogList());
  //   if (search && blog) {
  //     setnewData(
  //       blog.filter(
  //         (cd) => cd.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
  //       )
  //     );
  //     console.log(newData, "new ", data);
  //   }
  // }, [search]);
  const click = () => {
    settoggle(false);
    settoggle2(false);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <div className={styles.open_button} onClick={() => handleOpen()}>
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </div>
          <Link to="/about" style={{ textDecoration: "None" }}>
            <div className={styles.red_upper}>
              <Avatar
                alt="Priya"
                src={priya}
                style={{
                  objectFit: "cover",
                  backgroundSize: "cover",
                }}
                data-aos="fade-zoom-in"
                data-aos-delay="500"
              ></Avatar>
            </div>
          </Link>
        </div>
        <div className={styles.search}>
          <input
            className={styles.input}
            placeholder="search....."
            onChange={(e) => dispatch(blogSearchAction(e.target.value))}
          />

          <SearchIcon className={styles.srch} />
        </div>
        <div className={styles.left}>
          <div
            className={styles.home}
            data-aos="fade-zoom-in"
            data-aos-delay="500"
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </div>

          <div
            className={styles.sign}
            data-aos="fade-zoom-in"
            data-aos-delay="500"
          >
            <Link to={"/signin"} style={{ textDecoration: "none" }}>
              Signin
            </Link>
          </div>
        </div>{" "}
        <div className={styles.dot} onClick={() => handleOpen2()}>
          {toggle2 ? <CloseIcon /> : <MoreVertIcon />}
        </div>
      </div>

      <div className={styles.container}>
        <SideBar toggle={toggle} click={() => click()} />
        {/* <CardPage
          toggle={toggle}
          data={search ? newData : blog}
          teller={search ? "newData" : "data"}
        /> */}
        <div className={styles.sub_container}>
          {
            <div
              className={
                toggle2
                  ? toggle
                    ? [styles.toggle, styles.cardscale2].join(" ")
                    : [styles.toggle].join(" ")
                  : [styles.toggle, styles.end].join(" ")
              }
            >
              <div className={styles.home2} onClick={() => click()}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </div>
              <div className={styles.sign2} onClick={() => click()}>
                <Link to={"/signin"} style={{ textDecoration: "none" }}>
                  Signin
                </Link>
              </div>
            </div>
          }
          <div
            className={
              toggle ? [styles.card, styles.cardscale].join(" ") : styles.card
            }
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

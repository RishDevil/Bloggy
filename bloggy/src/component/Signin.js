import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signin, unsuccess } from "../action/userActions";
import styles from "./Form.module.css";

const Signin = (props) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { serror, userInfo, success } = useSelector((state) => state.userSig);
  const submit = (e) => {
    e.preventDefault();

    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (success) {
      dispatch(unsuccess());
      props.history.push("/");
    }
  }, [success]);
  return (
    <div className={styles.container}>
      <div className={styles.sign}>
        <form onSubmit={submit} className={styles.form}>
          <div
            className={styles.error}
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            {serror}
          </div>
          <input
            data-aos="fade-zoom-in"
            data-aos-delay="100"
            className="input"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
            className={styles.input}
          />
          <br />

          <input
            data-aos="fade-zoom-in"
            data-aos-delay="100"
            type="password"
            className="input"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            className={styles.input}
          />
          <br />
          <button
            type="submit"
            className={styles.button}
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

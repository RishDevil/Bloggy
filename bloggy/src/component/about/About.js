import React, { useState, useEffect } from "react";
import priya from "../priya.jpg";
import styles from "./About.module.css";
const About = () => {
  useEffect(() => {
    var section = document.querySelector(`.${styles.section_img}`);
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      section.style.clipPath = "circle(" + value + "px at center)";
      if (value > 1200) {
        console.log(value);
        section.style.filter = "blur(10px)";
        section.style.opacity = "0.1";
      } else if (value > 800) {
        console.log(value);
        section.style.filter = "blur(5px)";
        section.style.opacity = "1";
      } else {
        console.log(value);
        section.style.filter = "blur(0px)";
        section.style.opacity = "1";
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.name_content}>
        <div className={styles.name}>SMRITI CHOUBEY</div>
      </div>

      <div className={styles.content}>
        <section className={styles.section_img}>
          <img src={priya} className={styles.img} />
        </section>
        <div className={styles.description}>
          <p>
            <h1>Smriti Choubey</h1>
          </p>
          <p>I love travelling</p>
          <p>
            You meet so many strangers and mix with so many cultures. Different
            languages are reaching your ears and sound like music. New people.
            New transport. New currency. It all changes all the time and you
            just go with the flow. You misread the train schedule and miss your
            train? No worries. You are not really on a schedule… so why sweat
            it? You shrug it off and go grab a beer. The more things change, the
            more flexible you become.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

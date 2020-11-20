import React, { useState, useEffect } from "react";
import priya from "./priya.jpg";
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
          <p>
            I love
            travellinggwiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
          </p>
          <p>
            When was the last time you took a true vacation? Not a “let me just
            check my work email” vacation, or a “finishing a blog post on the
            plane” vacation, but a real, no contact, no schedule, mimosas at 10
            am kind of escape? Unless you’re apart of the 28% of American
            workers who actually use their max vacation time annually, you’re
            probably overdue for some relaxation. Let’s say you have a locale in
            mind—maybe a faraway destination you’ve always wanted to see—but you
            don’t know where to begin researching hotels, car rentals, excursion
            packages, and restaurants. Even aside from the travel logistics, you
            probably want to read up on your destination’s local cultures and
            customs—you don’t just want to walk like a robot from tourist
            destination to tourist destination, buying a cheap keychain or shot
            glass at each gift shop. You want to discover this place like a
            local would, right? For that, you’ll need some well-rendered travel
            content examples.
          </p>
          <button>know more</button>
        </div>
      </div>
    </div>
  );
};

export default About;

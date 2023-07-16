import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Link from "next/link";
import Footer from "components/common/Footer";

export default function BTech() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="B.Tech" />
      {/* <!-- content of b.tech section  --> */}
      <section id={styles.btcontent}>
        <div className={styles.mission}>
          <h2>B.Tech</h2>
          <p>
            Bachelor of Technology (B. Tech) is a professional undergraduate
            engineering degree programme awarded to candidates after completion
            of four years of study in the field. This undergraduate programme is
            your gateway to a career in engineering. In India, a B.Tech degree
            is offered across various specialisations.
          </p>
        </div>

        <h2>Choose Your Branch</h2>
        <div id={styles.branches}>
          <Link passHref href="/courses/btech/first-year">
            <a>
              <div className={styles.brnch} id={styles.firstyear}>
                <p>First </p>
                <p>Year</p>
              </div>
            </a>
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1ztGxAIE218NlN7as3oReDTvJ_FvtLEHz?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.cs}>
              <p>Computer Engineering</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/u/2/folders/1BEX9E26MR8acskj01dmFv3kkwjMqqA7r"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.elb}>
              <p>Electronics Engineering</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/u/2/folders/1wiIt2h6OqqP0SbGYIx-db7q-L_2i04C7"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.elec}>
              <p>Electrical Engineering</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/u/2/folders/1Vq1zAMhvp7csi5KHDkXaHQNj4Kk9zLtK"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.mech}>
              <p>Mechanical Engineering</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/u/2/folders/1vtcsobW2XraEmmajLRdah6LnJ1ufp4R_"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.civil}>
              <p>Civil</p>
              <p>Engineering</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/u/2/folders/1g1Y5gY_7QyQEvClMnSXDkz2AScegBQzL"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>Chemical Engineering</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/u/2/folders/1cMPRoW0JGvAt9cSr_DddViz9LihmzgS5"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>Food</p>
              <p>Technology</p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

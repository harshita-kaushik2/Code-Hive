import Head from "next/head";
import Header from "components/common/Header/Header";
import styles from "@styles/scss/main.module.scss";
import Footer from "components/common/Footer";
import Team from "components/Team/Team";

export default function About() {
  const image = "/images/about/about_bg.svg";
  return (
    <>
      <Head>
        <title>About | Code Hive</title>
        <meta
          name="description"
          content="Code Hive is a one stop solution for all IT resources"
        />
      </Head>
      <Header image={image} text="Know me more !" />
      <main id={styles.content}>
        {/* <!-- About Us Container --> */}
        <div className={styles.whoWeAre}>
          <h2>What is Code Hive ?</h2>
          <p>
           Code Hive is a one stop solution for all the resources
           needed by a person in the IT field, be it a complete
           newbie to tech who wants to learn new skills, or by someone 
           who is already well-versed in their tech stack. 
          </p>
          <h2>Why was Code Hive created?</h2>
          <p>
           Being in the same field myself, I have watched myself,
           my batchmates as well as my juniors drown in the ocean of
           resources. I wanted to do something about this issue so that 
           access to the most refined resources becomes less time consuming
           for everyone. This led me to gather all the resources and carefully
           curate them into this one site!
          </p>
        </div>

        <Team />

        {/* Our Story  */}
        <div className={`${styles.whoWeAre} ${styles.ourStory}`}>
          <h2>About Me</h2>
          <p>
            Currently in my 3rd year of B.Tech in Computer Science and Engineering. 
          </p>
          <p>
            I have intense passion for technology and people. So, I thrive to use
            technology and bring people closer or make their lives easier. 
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

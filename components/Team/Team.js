import styles from "@styles/scss/main.module.scss";
import Card from "./Teamcard";

const Team = () => {
  return (
    <>
      <h2 className={styles.heading}>Know me!</h2>
      <div className={styles.team}>
        <Card
          insta={"https://www.instagram.com/harshitaxkaushik/"}
          twitter={"https://twitter.com/HarshitaCodes"}
          linkedin={"https://www.linkedin.com/in/harshita-kaushik-537319265/"}
          name={"Harshita Kaushik"}
          photo={"/images/team/1.jpg"}
          desig={"Founder and Developer"}
        />
      </div>
    </>
  );
};

export default Team;

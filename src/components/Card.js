import { useState } from "react";
import styles from "../styles/Card.module.css";
import getElapseTime from "../utils/GetElapseTime";
import getUploadDate from "../utils/GetUploadDate";

function Card({ link }) {
  const [isHover, setIsHover] = useState(false);
  const [hoverClass, setIsHoverClass] = useState();
  const createdAtString = link.created_at;
  const elapseTime = getElapseTime(createdAtString);
  const postedDate = getUploadDate(createdAtString);

  const handleHover = () => {
    setIsHover(true);
    setIsHoverClass(styles.hover);
  };
  const handleHoverOut = () => {
    setIsHover(false);
    setIsHoverClass("");
  };

  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
      className={styles.card}
      onClick={() => window.open(`${link.url}`, "_blank")}
    >
      <img
        className={styles.starIcon}
        src={`${process.env.PUBLIC_URL}/images/star.svg`}
      />
      <div className={styles.cardImageBox}>
        <img
          className={
            link && link.imageSource
              ? `${styles.cardImage} ${hoverClass}`
              : `${styles.noImage} ${hoverClass}`
          }
          src={
            link && link.image_source
              ? link.image_source
              : "/images/noImage.svg"
          }
        />
      </div>
      <div
        className={
          isHover
            ? `${styles.cardDescription} ${styles.hover}`
            : styles.cardDescription
        }
      >
        <div className={styles.timeBox}>
          <div className={styles.time}>{elapseTime}</div>
          <img src={`${process.env.PUBLIC_URL}/images/meatball.png`} />
        </div>
        <p className={styles.text}>{link && link.description}</p>
        <div className={styles.date}>{postedDate}</div>
      </div>
    </div>
  );
}

export default Card;

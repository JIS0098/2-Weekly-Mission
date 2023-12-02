import { useEffect, useState } from "react";
import styles from "../styles/Card.module.css";
import getElapseTime from "../utils/getElapseTime";
import getUploadDate from "../utils/getUploadDate";

function Card({ link }) {
  console.log(link)
  const [isHover, setIsHover] = useState(false);
  const [hoverClass, setIsHoverClass] = useState();
  const createdAtString = link.createdAt;
  const elapseTime = getElapseTime(createdAtString);
  const postedDate =getUploadDate(createdAtString)
 
  const handleHover = () => {
    setIsHover(true);
    setIsHoverClass(styles.hover);
  };
  const handleHoverOut = () => {
    setIsHover(false);
    setIsHoverClass("");
  };


  return (
    <div onMouseOver={handleHover} onMouseOut={handleHoverOut} className={styles.card} onClick={() => window.open(`${link.url}`, "_blank")}>
      <div className={styles.cardImageBox}>
        <img className={link && link.imageSource ? `${styles.cardImage} ${hoverClass}` : `${styles.noImage} ${hoverClass}`} src={link && link.imageSource ? link.imageSource : "/images/noImage.svg"} />
      </div>
      <div className={isHover ? `${styles.cardDescription} ${styles.hover}` : styles.cardDescription}>
        <div className={styles.timeBox}>
          <div className={styles.time}>{elapseTime}</div>
          <img src={process.env.PUBLIC_URL + "/images/meatball.png"} />
        </div>
        <p className={styles.text}>{link && link.description}</p>
        <div className={styles.date}>{postedDate}</div>
      </div>
    </div>
  );
}

export default Card;

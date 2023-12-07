import styles from "../styles/Banner.module.css";

function Banner({ folder }) {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerBox}>
        <img
          className={styles.bannerImage}
          src={folder && folder.owner.profileImageSource}
          alt="배너 프로필 이미지"
        />
        <div className={styles.bannerText}>{folder && folder.owner.name}</div>
        <h1 className={styles.bannerTitle}>{folder && folder.name}</h1>
      </div>
    </section>
  );
}

export default Banner;

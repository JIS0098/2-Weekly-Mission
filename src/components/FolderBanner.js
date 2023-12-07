import styles from "../styles/FolderBanner.module.css";

function FolderBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerBox}>
        <input className={styles.input} placeholder="링크를 추가해 보세요" />
        <img
          className={styles.linkIcon}
          src={`${process.env.PUBLIC_URL}/images/linkIcon.png`}
          alt="링크 아이콘"
        />
        <button type="button" className={styles.button}>
          추가하기
        </button>
      </div>
    </section>
  );
}

export default FolderBanner;

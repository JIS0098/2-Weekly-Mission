import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} ${styles.wrap}`}>
      <div className={styles.copyright}>©codeit - 2023</div>
      <div className={styles.footerLink}>
        <a href="/privacy.html" className={styles.pointer}>
          Privacy Policy
        </a>
        <a href="/faq.html" className={styles.pointer}>
          FAQ
        </a>
      </div>
      <div className={styles.footerSns}>
        <a name="facebook" href="https://www.facebook.com" target="facebook">
          <img
            src={`${process.env.PUBLIC_URL}/images/facebook.png`}
            alt="페이스북 아이콘"
          />
        </a>
        <a name="twitter" href="https://twitter.com/?lang=ko" target="twitter">
          <img
            src={`${process.env.PUBLIC_URL}/images/twitter.png`}
            alt="트위터 아이콘"
          />
        </a>
        <a name="youtube" href="https://www.youtube.com" target="youtube">
          <img
            src={`${process.env.PUBLIC_URL}/images/youtube.png`}
            alt="유튜브 아이콘"
          />
        </a>
        <a name="instagram" href="https://www.instagram.com" target="instagram">
          <img
            src={`${process.env.PUBLIC_URL}/images/instagram.png`}
            alt="인스타 아이콘"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import styles from "../styles/Header.module.css";

function Header({ user }) {
  return (
    <header>
      <div className={styles.headerBox}>
        <img
          className={styles.headerLogo}
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="로고이미지"
        />
        {user && user.email ? (
          <div className={styles.profile}>
            <img
              className={styles.profileIcon}
              src={user.image_source}
              alt="프로필 아이콘"
            />
            <div className={styles.email}>{user.email}</div>
          </div>
        ) : (
          <a className={styles.loginButton}>로그인</a>
        )}
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
import SearchInput from "../components/SearchInput";
import styles from "../styles/SharedPage.module.css";
import { getSharedData, getUserData } from "../services/SharedApi";

function SharedPage() {
  const [sharedFolder, setSharedFolder] = useState();
  const [user, setUser] = useState();

  const handleFolderLoad = async () => {
    const { folder } = await getSharedData();
    setSharedFolder(folder);
  };

  const handleEmailLoad = async () => {
    const { data } = await getUserData();
    setUser(data);
  };

  useEffect(() => {
    handleEmailLoad();
    handleFolderLoad();
  }, []);

  return (
    <>
      <Header sharedUser={user} />
      <Banner folder={sharedFolder} />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <CardList links={sharedFolder && sharedFolder.links} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SharedPage;

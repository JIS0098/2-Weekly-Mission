import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FolderBanner from "../components/FolderBanner";
import CardList from "../components/CardList";
import SearchInput from "../components/SearchInput";
import styles from "../styles/FolderPage.module.css";
import FolderButtonList from "../components/FolderButtonList";
import FolderTitle from "../components/FolderTitle";
import FloatingButton from "../components/FloatingButton";
import {
  getFolderUserData,
  getSelectData,
  getAllLinksData,
  getFoldersData,
} from "../services/FolderApi";

function FolderPage() {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [user, setUser] = useState();
  const [id, setId] = useState(0);

  const handleEmailLoad = async () => {
    const { data } = await getFolderUserData();
    setUser(data[0]);
  };

  const handleFoldersLoad = async () => {
    const addFolder = {
      id: 0,
      name: "전체",
      link: [],
    };
    const allData = await getAllLinksData();
    const { data } = await getFoldersData();
    addFolder.link = allData.data;
    setFolders([addFolder, ...data]);
    if (id === 0) {
      setLinks(addFolder.link);
    }
  };

  const selectFolderLoad = async () => {
    const { data } = await getSelectData(id);
    setLinks(data);
  };

  useEffect(() => {
    handleEmailLoad();
    handleFoldersLoad();
    if (id !== 0) {
      selectFolderLoad();
    }
  }, [id]);

  return (
    <>
      <Header user={user} />
      <FolderBanner />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <FolderButtonList folders={folders} setId={setId} />
          <FolderTitle folders={folders} id={id} />
          {links.length === 0 ? (
            <div className={styles.linksNull}>
              <div>저장된 링크가 없습니다.</div>
            </div>
          ) : (
            <CardList links={links} />
          )}
        </div>
      </section>
      <Footer />
      <FloatingButton />
    </>
  );
}

export default FolderPage;

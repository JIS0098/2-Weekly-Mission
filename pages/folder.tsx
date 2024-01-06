import { useEffect, useState } from "react";
import Banner from "../components/domains/folder/Banner";
import CardList from "../components/commons/CardList";
import SearchInput from "../components/commons/SearchInput";
import styles from "../styles/folderPage.module.css";
import FolderButtonList from "../components/domains/folder/FolderButtonList";
import FolderTitles from "../components/domains/folder/folderTitle/FolderTitles";
import FloatingButton from "../components/domains/folder/FloatingButton";
import { getAllLinksData, getFoldersData } from "./api/FolderApi";

interface LinkInfo {
  id: number;
  url: string;
  title: string;
  description?: string;
  image_source: string;
  create_at: string;
}

interface FolderInfo {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: LinkInfo[];
}

function FolderPage() {
  const [folderList, setFolderList] = useState<FolderInfo[]>([]);
  const [selectFolderLinks, setSelectFolderLinks] = useState<LinkInfo[]>([]);
  const [id, setId] = useState<number>(0);

  const handleFoldersLoad = async () => {
    const allLinksFolder: FolderInfo = {
      id: 0,
      favorite: false,
      name: "전체",
      user_id: 1,
      links: [
        {
          id: 0,
          url: "",
          title: "",
          image_source: "",
          create_at: "",
        },
      ],
    };
    const allData = await getAllLinksData();
    const { data } = await getFoldersData();
    allLinksFolder.links = allData.data;
    setFolderList([allLinksFolder, ...data]);
  };

  function renderContent() {
    if (id === 0) {
      return <CardList links={folderList[0]?.links} />;
    }

    if (selectFolderLinks.length === 0) {
      return (
        <div className={styles.linksNull}>
          <div>저장된 링크가 없습니다.</div>
        </div>
      );
    }

    return <CardList links={selectFolderLinks} />;
  }

  useEffect(() => {
    handleFoldersLoad();
  }, [id]);

  return (
    <>
      <Banner />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <FolderButtonList
            folderList={folderList}
            setSelectFolderLinks={setSelectFolderLinks}
            setId={setId}
          />
          <FolderTitles folderList={folderList} id={id} />
          {renderContent()}
        </div>
      </section>
      <FloatingButton />
    </>
  );
}

export default FolderPage;

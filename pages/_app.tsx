import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ModalContext } from "../contexts/LocaleContext";
import GlobalStyle from "../styles/GlobalStyles";
import useModal from "../hook/useModal";
import { modals } from "../components/commons/modals/modalList";
import { NextRouter, useRouter } from "next/router";
import { getFolderData, getOwnerData, getLinkData } from "./api/SharedApi";
import { UserInfo, FolderInfo, Link } from "../types/common";
import { ParsedUrlQuery } from "querystring";
import { getAllLinkData, getAllFolderData } from "./api/FolderApi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { modal, openModal, closeModal } = useModal();
  const [folderInfo, setFolderInfo] = useState<FolderInfo[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const [sharedLinkInfo, setSharedLinkInfo] = useState<Link[]>([]);
  const [folderAllLinkInfo, setFolderAllLinkInfo] = useState<Link[]>([]);
  const [folderListInfo, setFolderListInfo] = useState<Link[]>([]);

  const router: NextRouter = useRouter();
  const pathname = router.pathname;
  const Modal = modals.get(modal.name);
  const { folderId }: ParsedUrlQuery = router.query;

  // const handleFolderInfoLoad = async () => {
  //   const { data } = await getFolderData(folderId as string);
  //   setFolderInfo(data);

  //   if (data && data.length > 0 && data[0].user_id) {
  //     handleUserInfoLoad(data[0].user_id);
  //   }
  // };

  // const handleUserInfoLoad = async (userId: number) => {
  //   const { data } = await getOwnerData(userId);
  //   setUserInfo(data[0]);
  //   handleSharedLinksInfoLoad(data[0].id, folderId as string);
  // };

  // const handleSharedLinksInfoLoad = async (
  //   userId: number,
  //   folderId: string
  // ) => {
  //   const { data } = await getLinkData(userId, folderId);
  //   setSharedLinkInfo(data);
  // };

  // const handleFolderListLoad = async () => {
  //   const allLinksFolder = {
  //     id: 0,
  //     name: "전체",
  //     user_id: 1
  //   };
  //   const { data: folder } = await getAllFolderData();
  //   setFolderListInfo([allLinksFolder, ...folder.folder]);
  // };

  // const handleAllLinkLoad = async () => {
  //   const { data: folder } = await getAllLinkData();
  //   setFolderAllLinkInfo(folder.folder);
  // };

  useEffect(() => {
    // handleFolderListLoad();
    // handleAllLinkLoad();
    // if (folderId) {
    //   handleFolderInfoLoad();
    // }
  }, [folderId]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />

      <ModalContext.Provider value={{ openModal, closeModal }}>
        {modal.isOpen && Modal ? <Modal onConfirm={closeModal} /> : null}
        <Layout>
          <Component closeModal={closeModal} {...pageProps} />
        </Layout>
      </ModalContext.Provider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

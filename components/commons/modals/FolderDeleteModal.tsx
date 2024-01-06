import CloseButton from "./CloseButton";
import { DeleteModalModalBox, ModalLayout } from "./styledModal";

function FolderDeleteModal() {
  return (
    <ModalLayout>
      <DeleteModalModalBox>
        <CloseButton />
        <h3>폴더 삭제</h3>
        <p>폴더명</p>
        <button type="button">삭제하기</button>
      </DeleteModalModalBox>
    </ModalLayout>
  );
}

export default FolderDeleteModal;

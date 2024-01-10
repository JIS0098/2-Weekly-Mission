import styled from "styled-components";
import { useContext } from "react";
import Category from "./Category";
import { Folder } from "../../../../types/folder";
import LocaleContext from "../../../../contexts/LocaleContext";

const categoryList = [
  { title: "공유", image: "/images/share.png " },
  { title: "이름 변경", image: "/images/pen.png" },
  { title: "삭제", image: "/images/delete.png" },
];

function CategoryBox({
  openModal,
  searchResult,
}: {
  openModal: () => void;
  searchResult: string;
}) {
  const locale = useContext<Folder>(LocaleContext);
  return (
    <StyledCategoryBox>
      {searchResult === "" ? <h1>{locale.name}</h1> : <h1>전체</h1>}
      {locale.name !== "전체" ? (
        <CategoryList>
          {categoryList.map((category) => (
            <Category
              key={locale.id}
              category={category}
              openModal={openModal}
            />
          ))}
        </CategoryList>
      ) : null}
    </StyledCategoryBox>
  );
}

const StyledCategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
  width: 106rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  gap: 1.2rem;
`;

export default CategoryBox;

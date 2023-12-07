import styled from "styled-components";

const categoryList = [
  { title: "공유", image: `${process.env.PUBLIC_URL}/images/share.png` },
  { title: "이름 변경", image: `${process.env.PUBLIC_URL}/images/pen.png` },
  { title: "삭제", image: `${process.env.PUBLIC_URL}/images/delete.png` },
];

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

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
`;

function Category({ category }) {
  const { title, image } = category;
  return (
    <StyledCategory>
      <img src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </StyledCategory>
  );
}

function CategoryBox({ folder }) {
  return (
    <StyledCategoryBox>
      <h1>{folder.name}</h1>
      {folder.name !== "전체" ? (
        <CategoryList>
          {categoryList.map((category) => (
            <Category key={category.title} category={category} />
          ))}
        </CategoryList>
      ) : (
        ""
      )}
    </StyledCategoryBox>
  );
}

function FoldersTitle({ folders, id }) {
  return (
    <>
      {folders &&
        folders.map((folder) => {
          if (folder.id === id) {
            return <CategoryBox key={folder.id} folder={folder} />;
          }
        })}
    </>
  );
}
export default FoldersTitle;

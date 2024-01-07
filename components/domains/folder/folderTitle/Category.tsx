import styled from "styled-components";
import Image from "next/image";

interface CategoryInfo {
  title: string;
  image: string;
}

function Category({
  category,
  openModal,
}: {
  category: CategoryInfo;
  openModal: () => void;
}) {
  const { title, image } = category;

  return (
    <CategoryLayout
      onClick={() => {
        openModal(`${title}`);
      }}
    >
      <Image width={18} height={18} src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </CategoryLayout>
  );
}

const CategoryLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
`;

export default Category;

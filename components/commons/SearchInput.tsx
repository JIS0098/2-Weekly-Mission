import styled from "styled-components";

function SearchInput() {
  return (
    <SearchBox>
      <input placeholder="링크를 검색해주세요" />
      <img src="/images/search.png" alt="검색 아이콘" />
    </SearchBox>
  );
}

const SearchBox = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 4rem;

  & input {
    width: 100%;
    padding: 1.6rem 1.6rem 1.5rem 4.25rem;
    border: none;
    border-radius: 1rem;
    background-color: rgb(245, 245, 245, 1);
    position: relative;
  }

  & img {
    position: absolute;
    left: 1.8rem;
    top: 32.5%;
  }
`;

export default SearchInput;

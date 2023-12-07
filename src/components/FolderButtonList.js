import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
    color: #ffffff;
  }

  /* Mobile*/
  @media (max-width: 390px) {
    padding: 0.6rem 1.2rem;
  }
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const StyledAddLink = styled.div`
  color: var(--primary-color);
  border: none;
  font-size: 3rem;
  padding-left: 3rem;

  @media (max-width: 390px) {
    display: none;
  }
`;

function Button({ folder, setId }) {
  const handleChangeID = (folderId) => {
    setId(folderId);
  };
  return (
    <StyledButton onClick={() => handleChangeID(folder.id)}>
      {folder && folder.name}
    </StyledButton>
  );
}

function FolderButtonList({ setId, folders }) {
  return (
    <div>
      <StyledButtonBox>
        <StyledButtons>
          {folders &&
            folders.map((folder) => (
              <Button setId={setId} folder={folder} key={folder.id} />
            ))}
        </StyledButtons>
        <StyledAddLink>+</StyledAddLink>
      </StyledButtonBox>
    </div>
  );
}

export default FolderButtonList;

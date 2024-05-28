import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    > p {
      font-size: 18px;
      font-weight: 600;
      text-decoration: underline;
    }
  }
  .inputField {
    border: 1px solid #474747;
    border-radius: 8px;
    width: 100%;
    padding: 12px 8px;
  }
`;

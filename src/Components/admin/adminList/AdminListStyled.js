import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  .listItem {
    border: 1px solid cornflowerblue;
    border-radius: 14px;
    padding: 10px;
    width: 200px;
  }

  .colorsList {
    display: flex;
  }
`;

export const AdminListColorItem = styled.li`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 1px solid black;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

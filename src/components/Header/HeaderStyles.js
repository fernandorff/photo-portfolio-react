import styled from "styled-components";

export const Styled = styled.div`
  header {
    background-color: #f5f5f5;
    width: 100%;
    padding: 20px 20%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 50px;
  }

  nav {
    display: flex;
  }

  nav a {
    padding: 10px;
    background-color: aliceblue;
  }

  nav a:hover {
    box-shadow: 0px -3px 0px black inset, 0px 3px 0px black inset;
  }

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 10px;
  }
`;

import styled from "styled-components";

export const Styled = styled.div`
  header {
    background-color: red;
    width: 100%;
    padding: 20px 20%;
  }

  nav {
    display: flex;
  }

  nav a {
    padding: 10px;
    background-color: aliceblue;
  }

  nav a:hover {
    background-color: yellow;
  }

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    margin-top: 10px;
  }
`;

import styled from "styled-components";
export const NavWrapper = styled.div`
  form {
    background-color: #fff;

    height: 40px;
    padding: 0 30px;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 100px;
    svg {
      font-size: x-large;
      cursor: pointer;
    }
    input {
      border: none;
    }
    input:focus {
      outline: none;
      box-shadow: none;
    }
  }
  font-family: Poppins;
  .links {
    text-decoration: none;
    color: #fff;
  }
`;

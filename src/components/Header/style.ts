import styled from "styled-components";
import logo from "../../assets/logo.jpeg";

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  gap: 50px;
  h1 {
    margin-top: 40vh;
    width: 100%;
    text-align: center;
    &::first-letter {
      font-size: 200%;
    }
  }
  div {
    position: absolute;
    top: 0px;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(248, 249, 250, 1)
      ),
      url(${logo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1000;
    width: 100vw;
    height: 60vw;
  }

  @media (min-width: 769px) {
    h1 {
      margin-top: 45vh;
    }
    div {
      width: 100vw;
      height: 20vw;
    }
  }
`;

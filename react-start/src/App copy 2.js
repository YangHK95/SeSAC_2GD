import { styled } from "styled-components";
import logo from "./logo.svg";
import { keyframes } from "styled-components";
import "./components/styles/style1.scss";

function App() {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;

  const RootDiv = styled.div`
    text-align: center;
  `;
  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} 20s infinite linear;
  `;
  const MyA = styled.a`
    color: #61dafb;
  `;
  return (
    <>
      <RootDiv>
        <AppHeader>
          <AppLogo src={logo} alt="app" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyA
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </MyA>
        </AppHeader>
      </RootDiv>
      <h1>hi</h1>
    </>
  );
}
export default App;

import Header from "../../Header/Header";
import "./index.css";
export default function Home({ drawerController }) {
  return (
    <>
      <Header changeDrawerState={drawerController} />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </>
  );
}

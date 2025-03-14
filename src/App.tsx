import React from "react";
import "./App.css";
import { randomizeDeterrent } from "./utils/randomizeDeterrent";
import { deterrents } from "./utils/deterrents";

function App() {
  const [toDont, setToDont] = React.useState("");
  const [listItem, setListItem] = React.useState("");
  const [deterrent, setDeterrent] = React.useState("");

  const animatedListItem = document.getElementById("list")!;

  const removeAnimation = () => {
    animatedListItem.classList.remove("animation");
    setListItem("");
    setDeterrent("");
  };

  const disappear = () => {
    animatedListItem.classList.add("animation");
    setTimeout(removeAnimation, 1000);
  };

  React.useEffect(() => {
    if (listItem) {
      setTimeout(disappear, 500);
    }
  }, [listItem]);

  return (
    <>
      <header>
        <h1>To Don't List</h1>
        <h2>Pro-procrastination nation</h2>
      </header>
      <main>
        <div className="inputDiv">
          <label htmlFor="input">What do you have to do?</label>
          <div className="inputAndButton">
            <input id="input" onChange={(ev) => setToDont(ev.target.value)} />
            <button
              onClick={() => {
                setListItem(toDont);
                setDeterrent(randomizeDeterrent(deterrents));
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <ul>
          <li>
            <p id="list">{listItem}</p>
            <span>{deterrent}</span>
          </li>
        </ul>
      </main>
      <footer>By Ro Flo</footer>
    </>
  );
}

export default App;

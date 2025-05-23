import React from "react";
import "./App.css";
import { randomizeDeterrent } from "./utils/randomizeDeterrent";
import { deterrents } from "./utils/deterrents";
import { Header } from "./components/header/Header";

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
      <Header />
      <main>
        <form>
          <div className="inputDiv">
            <div className="inputAndButton">
              <input
                id="input"
                onChange={(ev) => setToDont(ev.target.value)}
                value={toDont}
              />
              <button
                className="submitButton"
                type="submit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setListItem(toDont);

                  if (toDont) {
                    setDeterrent(randomizeDeterrent(deterrents));
                    setToDont("");
                  }

                  if (toDont === "Watch Paddington 2, the best movie ever") {
                    setDeterrent("YES, GO DO THAT IMMEDIATELY");
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <ul>
          <li>
            <p id="list">{listItem}</p>
            <span className="deterrent">{deterrent}</span>
          </li>
        </ul>
      </main>
      <footer>
        <span>By Ro Flo :)</span>
        <span>
          <a
            href="https://www.flaticon.com/free-icons/sleep"
            title="sleep icons"
          >
            Sleep icons created by Sumitsaengtong - Flaticon
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;

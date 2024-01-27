import React from "react";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const clickHandler = () => {
    console.log("Une fonction nommée !");
  };
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="title 1">
            <div>Contenu 1</div>
            <Button onClick={() => console.log("Une fonction anonyme !")}>
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </Card>
          <Card title="title 2">
            <div>Contenu 2</div>
            <Button onClick={clickHandler}>
              <FontAwesomeIcon icon={faStar} />
            </Button>
          </Card>
          <Card title="title 3">Contenu 3</Card>
          <Card title="title 4">Contenu 4</Card>
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;

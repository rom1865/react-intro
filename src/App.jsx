import React, { useState } from "react";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [cpt1, setCpt1] = useState(0);
  const [cpt2, setCpt2] = useState(0);

  const clickHandler = () => {
    setCpt1(cpt1 + 1);
    console.log(`Valeur du premier bouton : ${cpt1}`);
  };
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="title 1">
            <div>Contenu 1 avec compteur : {cpt1}</div>
            <Button onClick={clickHandler}>
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </Card>
          <Card title="title 2">
            <div>Contenu 2 avec compteur : {cpt2}</div>
            <Button
              onClick={() => {
                setCpt2(cpt2 + 1);
                console.log(`Valeur du deuxième bouton : ${cpt2}`);
              }}
            >
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

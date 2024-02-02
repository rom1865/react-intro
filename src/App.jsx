import React, {useEffect, useState} from "react";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/Card";
// import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [counts, setCounts] = useState(
    {
      heart: 0,
      star: 0,
    }
  );

  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="title 1">
            <div>Contenu 1</div>
            <Counter
                before={<FontAwesomeIcon icon={faHeart} />}
                after={<FontAwesomeIcon icon={faHeart} />}
                onChange={heart => setCounts ({...counts , heart})}>
            </Counter>
          </Card>
          <Card title="title 2">
            <div>Contenu 2</div>
            <Counter
                before={<FontAwesomeIcon icon={faStar} />}
                after={<FontAwesomeIcon icon={faStar} />}
                onChange={star => setCounts ({...counts , star})}>
            </Counter>
          </Card>
          <Card title="title 3">Total des 2 compteurs : {counts.heart + counts.star}</Card>
          <Card title="title 4">Contenu 4</Card>
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;

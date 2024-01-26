import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="title 1" >
            Contenu 1
          </Card>
          <Card title="title 2">
              Contenu 2
          </Card>
          <Card title="title 3">
              Contenu 3
          </Card>
          <Card title="title 4">
              Contenu 4
          </Card>
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;

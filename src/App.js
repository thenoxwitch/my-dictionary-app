import logo from './logoatha.png';
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        
        </header>
        <main>
         
          <h1>🤍Super Cute Dictionary🤍</h1>
          <Dictionary />
        </main>
        
        <footer className="text-center">
          <small><a href="https://github.com/thenoxwitch/my-dictionary-app">
            Open Source Project{" "}
          </a>
          Coded with 💜 by Atenas G.I.{" "}</small>
        </footer>
      </div>
    </div>
  );
}



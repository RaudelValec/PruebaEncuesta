import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './firebase'
import 'bootswatch/dist/united/bootstrap.min.css'



ReactDOM.render(
  <React.StrictMode>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <img src="logo25x25.png"></img>
  

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Inicio
          <span className="sr-only">(current)</span>
        </a>
      </li>

    </ul>
  </div>
</nav>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

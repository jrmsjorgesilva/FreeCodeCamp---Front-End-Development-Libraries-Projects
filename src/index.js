import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NovoApp from './componentes/NovoApp';
import Calculator from './componentes/Calculator/Calculator';
import AppDrum from './componentes/DrumDreaming/AppDrum';
import MarkDownPreviewer from './componentes/MarkDownPreviewer/MarkDownPreviewer';
import RandomQuotes from './componentes/RandomQuotes/RandomQuotes';
import Pomodoro from './componentes/Pomodoro/Pomodoro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route 
          path='/'
          element={<App />}
        />

        <Route 
          path='/AppDrum'
          element={<AppDrum />}
        />

        <Route 
          path='/Calculator'
          element={<Calculator />}
        />

        <Route 
          path='/MarkDownPreviewer'
          element={<MarkDownPreviewer />}
        />

        <Route 
          path='/RandomQuotes'
          element={<RandomQuotes />}
        />

        <Route 
          path='/Pomodoro'
          element={<Pomodoro />}
        />

      </Routes>
      <footer>
      <small>
            Desenvolvido por Jorge Machado &copy;  
            <a 
                href='https://jmsoftwares.com.br/'
                target='_blank'
            >
                 Jm Softwares
            </a>
        </small>
      </footer>
    </Router>
  </React.StrictMode>
);
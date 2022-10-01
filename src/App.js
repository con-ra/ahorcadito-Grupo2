import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Inicio from './components/inicio';
import Integrantes from "./components/integrantes";
import Juego from './components/juego';
import Despedida from "./components/despedida";
import BarraNav from './routes/barraNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< BarraNav />}>
            <Route index element={<Inicio />} />
            <Route path='juego' element={<Juego />} />
            <Route path='integrantes' element={<Integrantes />} />
            <Route path='despedida' element={<Despedida />} />

            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
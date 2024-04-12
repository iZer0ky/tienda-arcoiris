import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import Menu from './components/Menu';
import DetalleProducto from './Pages/DetalleProducto';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={ <HomePage /> }  />
          <Route path="/:id" element={ <DetalleProducto /> } />
          <Route path="/registro" element={ <Registro /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </Router>
    </>

  )
}

export default App

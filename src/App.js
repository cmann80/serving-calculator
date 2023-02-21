import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path= "/" element={<Home/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

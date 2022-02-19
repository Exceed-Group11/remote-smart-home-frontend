import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddForm from './pages/AddForm';
import { getSessionId }  from './utils/cookie_util.js';


function App() {

  getSessionId();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addform' element={<AddForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

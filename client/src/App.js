import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
// import Details from './components/Details/Details';
import { AuthProvider } from './contexts/authContext';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import CreateMeme from './components/CreateMeme/CreateMeme';



function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/create" element={<CreateMeme/>}/>
      </Routes>
    </AuthProvider >
  );
}

export default App;

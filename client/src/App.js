import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';

import * as memeService from './services/memeService';
import Header from './components/Header/Header';
// import Details from './components/Details/Details';
import { AuthProvider } from './contexts/authContext';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import CreateMeme from './components/CreateMeme/CreateMeme';

function App() {
  const navigate = useNavigate();
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    memeService.getAll()
      .then(result => {
        setMemes(result);
      })
      .catch(error => console.log(error));
  }, []);

  const updateMemeState = (memeData) => {
    setMemes(state => [
        ...state,
        memeData,
    ]);

    navigate('/');
};

  //   useEffect(() => {
  //     gameService.getAll()
  //         .then(result => {
  //             setGames(result);
  //         });
  // }, []);

  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const data = await fetch('https://yourapi.com');
  //   }

  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, [])

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home memes={memes} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/create" element={<CreateMeme updateMemeState={updateMemeState}/>} />
      </Routes>
    </AuthProvider >
  );
}

export default App;

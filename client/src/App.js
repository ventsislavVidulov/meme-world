import { Routes, Route } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './contexts/authContext';
import { MemeProvider } from './contexts/memeContext';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import CreateMeme from './components/CreateMeme/CreateMeme';
import EditMeme from './components/EditMeme/EditMeme';
import DeleteMeme from './components/DeleteMeme/DeleteMeme';

function App() {

  return (
    <AuthProvider>
      <MemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/create" element={<CreateMeme />} />
          <Route path="/:memeId" element={<Details />} />
          <Route path="/:memeId/edit" element={<EditMeme />} />
          <Route path="/:memeId/delete" element={<DeleteMeme />} />
        </Routes>
      </MemeProvider>
    </AuthProvider >
  );
}

export default App;

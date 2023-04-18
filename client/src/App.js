import { Routes, Route } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './contexts/authContext';
import { MemeProvider } from './contexts/memeContext';
import IsLogged from './components/RouteGuards/IsLogged';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import CreateMeme from './components/CreateMeme/CreateMeme';
import EditMeme from './components/EditMeme/EditMeme';
import DeleteMeme from './components/DeleteMeme/DeleteMeme';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import IsAuthor from './components/RouteGuards/IsAuthor';

function App() {

  return (
    <AuthProvider>
      <MemeProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/create" element={
            <IsLogged>
              <CreateMeme />
            </IsLogged>
          } />
          <Route path="/:memeId" element={<Details />} />
          <Route path="/:memeId/edit" element={
            <IsLogged>
              <EditMeme />
            </IsLogged>
          } />
          <Route path="/:memeId/delete" element={
            <IsLogged>
              <DeleteMeme />
            </IsLogged>
          } />
        </Routes>
      </MemeProvider>
    </AuthProvider >
  );
}

export default App;

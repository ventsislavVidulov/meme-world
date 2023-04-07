import './App.css';

import Header from './components/Header/Header';
// import Details from './components/Details/Details';
import { AuthProvider } from './contexts/authContext';
import Login from './components/Login/Login';
import Register from './components/Register/register';



function App() {
  return (
    <AuthProvider>
      <Header />
      <Register />
      <Login />
    </AuthProvider >
  );
}

export default App;

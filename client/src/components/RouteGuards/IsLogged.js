import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/authContext';

const IsLogged = ({ children }) => {
    const { isLogged } = useAuthContext();

    if (!isLogged) {
        return <Navigate to="/login" replace />
    }
    return children;
};

export default IsLogged;

import { useState, useContext } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';
import { MemeContext } from '../../contexts/memeContext';

const IsAuthor = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { selectMeme } = useContext(MemeContext)
    const [currentMeme, setCurrentMeme] = useState({});
    const [isAuthor, setIsAuthor] = useState(false)
    const { memeId } = useParams();

    setCurrentMeme(selectMeme(memeId));

    console.log(user._id);
    console.log(currentMeme._ownerId);

    if (user._id === currentMeme._ownerId) {
        setIsAuthor(true);
    }

    if (!isAuthor) {
        return <Navigate to="/" replace />
    }
    return children;
};

export default IsAuthor;
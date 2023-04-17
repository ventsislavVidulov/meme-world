import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as memeService from '../services/memeService';

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
    const navigate = useNavigate();
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        memeService.getAll()
            .then(result => {
                setMemes(result);
            })
            .catch(error => console.log(error));
    }, []);

    const addMemeToState = (memeData) => {
        setMemes(state => [
            ...state,
            memeData,
        ]);

        navigate('/');
    };

    const editMemeInState = (memeId, memeData) => {
        setMemes(state => state.map(x => x._id === memeId ? memeData : x));
    }

    const deleteMemeFromState = (memeId) => {
        setMemes(state => state.filter(x => x._id !== memeId) );
    }

    return (
        <MemeContext.Provider value={{
            memes,
            addMemeToState,
            editMemeInState,
            deleteMemeFromState
        }}>
            {children}
        </MemeContext.Provider>
    )
}
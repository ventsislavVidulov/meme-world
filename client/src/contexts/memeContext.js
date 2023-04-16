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

    const updateMemeState = (memeData) => {
        setMemes(state => [
            ...state,
            memeData,
        ]);

        navigate('/');
    };

    return (
        <MemeContext.Provider value={{
            memes,
            updateMemeState
        }}>
            {children}
        </MemeContext.Provider>
    )
}
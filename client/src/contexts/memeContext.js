import { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import * as memeService from '../services/memeService';

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
    const navigate = useNavigate();
    const [memes, setMemes] = useState([]);
    // const cashedMemes = useMemo(() => setMemes(memes), [memes]);

    useEffect(() => {
        memeService.getAll()
            .then(result => {
                setMemes(result);
            })
            .catch(error => console.log(error));
    }, []);

    const selectMeme = (memeId) => {
        return memes.find(x => x._id === memeId) || {};
    };

    const addMemeToState = (memeData) => {
        setMemes(memes => [
            ...memes,
            memeData,
        ]);

        navigate('/');
    };

    const editMemeInState = (memeId, memeData) => {
    //    console.log(memeId);
        setMemes(memes => memes.map(x => x._id === memeId ? memeData : x));
    }

    const deleteMemeFromState = (memeId) => {
        setMemes(memes => memes.filter(x => x._id !== memeId) );
    }

    return (
        <MemeContext.Provider value={{
            memes,
            selectMeme,
            addMemeToState,
            editMemeInState,
            deleteMemeFromState
        }}>
            {children}
        </MemeContext.Provider>
    )
}
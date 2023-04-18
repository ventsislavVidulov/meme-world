import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './EditMeme.module.css';

import { editMeme, getOne } from '../../services/memeService';
import { MemeContext } from '../../contexts/memeContext';

const EditMeme = () => {
    const [currentMeme, setCurrentMeme] = useState({});
    const { memeId } = useParams();
    const navigate = useNavigate();
    const { editMemeInState } = useContext(MemeContext);

    // console.log(memeId);

    useEffect(() => {
        getOne(memeId)
            .then(memeData => {
                setCurrentMeme(memeData);
            })
    }, [memeId]);

    const onSubmit = (e) => {
        e.preventDefault();

        const memeData = Object.fromEntries(new FormData(e.target));
        // console.log(memeData);
        editMeme(memeId, memeData)
            .then(result => {
                editMemeInState(memeId, result);
                // console.log(result);
                navigate(`/${memeId}`);
            });
    }
    // console.log(currentMeme);
    return (
        <div className={styles.container}>
            <h1>EDIT MEME</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="title">Title</label>
                    <input className={styles.rounded} type="text" name="title" id="title" defaultValue={currentMeme.title} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="imgeUrl">Image url</label>
                    <input className={styles.rounded} type="text" name="imgUrl" id="imgeUrl" defaultValue={currentMeme.imgUrl} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="description">Description</label>
                    <input className={styles.rounded} type="text" name="description" id="description" defaultValue={currentMeme.description} />
                </div>
                <button type="submit" className={styles.rounded && styles.margin && styles.button}>
                    EDIT MEME
                </button>
            </form>
        </div>

    );
}

export default EditMeme;
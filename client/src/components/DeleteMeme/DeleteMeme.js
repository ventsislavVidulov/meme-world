import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './DeleteMeme.module.css';

import { deleteMeme, getOne } from '../../services/memeService';
import { MemeContext } from '../../contexts/memeContext';

const DeleteMeme = () => {
    const [currentMeme, setCurrentMeme] = useState({});
    const { memeId } = useParams();
    const navigate = useNavigate();
    const { deleteMemeFromState } = useContext(MemeContext);

    useEffect(() => {
        getOne(memeId)
            .then(memeData => {
                setCurrentMeme(memeData);
            })
    }, [memeId])

    const onSubmit = (e) => {
        e.preventDefault();

        deleteMeme(memeId)
            .then(result => {
                deleteMemeFromState(memeId);
                navigate(`/`);
            });
    }

    return (
        <div className={styles.container}>
            <h1>DELETE MEME</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="title">Title</label>
                    <input className={styles.rounded} type="text" name="title" id="title" defaultValue={currentMeme.title} disabled/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="imgeUrl">Image url</label>
                    <input className={styles.rounded} type="text" name="imgUrl" id="imgeUrl" defaultValue={currentMeme.imgUrl} disabled/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="description">Description</label>
                    <input className={styles.rounded} type="text" name="description" id="description" defaultValue={currentMeme.description} disabled/>
                </div>
                <button type="submit" className={styles.rounded && styles.margin && styles.button}>
                    DELETE MEME
                </button>
            </form>
        </div>

    );
}

export default DeleteMeme;


import styles from './CreateMeme.module.css';

import { createMeme } from '../../services/memeService';

const CreateMeme = ({updateMemeState}) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const memeData = Object.fromEntries(new FormData(e.target));
        createMeme(memeData)
            .then(result => {
                updateMemeState(result);
            });
    }

    return (
        <div className={styles.container}>
            <h1>CREATE MEME</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="title">Title</label>
                    <input className={styles.rounded} type="text" name="title" id="title" />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="imgeUrl">Image url</label>
                    <input className={styles.rounded} type="text" name="imgUrl" id="imgeUrl" />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="description">Description</label>
                    <input className={styles.rounded} type="text" name="description" id="description" />
                </div>
                <button type="submit" className={styles.rounded && styles.margin}>
                    CREATE MEME
                </button>
            </form>
        </div>

    );
}

export default CreateMeme;
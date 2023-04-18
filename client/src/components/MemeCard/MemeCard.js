import { useNavigate } from 'react-router-dom';

import styles from './MemeCard.module.css'

export const MemeCard = ({ meme }) => {
    const memeId = meme._id;
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/${memeId}`)
    }

    return (
        <div className={styles.card} onClick={onClick}>
            <h1>{meme.title}</h1>
            <img className={styles.img} src={meme.imgUrl} alt="" />
            <p className={styles.description}>{meme.description}</p>
        </div>
    );
}
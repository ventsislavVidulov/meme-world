import styles from './MemeCard.module.css'

export const MemeCard = ({ meme }) => {

    return(
        <div className={styles.card}>
            <h1>{meme.title}</h1>
            <img src={meme.imgUrl} alt="" />
            <p>{meme.description}</p>
        </div>
    );
}
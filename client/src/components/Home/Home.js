import styles from './Home.module.css'

import { MemeCard } from "../MemeCard/MemeCard";

const Home = ({ memes }) => {

    return (
        <>
            <h1>
                HOME
            </h1>
        <div className={styles.main}>
            {memes?.length > 0
                ? memes.map(x => <MemeCard key={x._id} meme={x} />)
                : <h3 className={styles.noMemes}>No memes yet</h3>
            }
        </div>
        </>
    )
}

export default Home;
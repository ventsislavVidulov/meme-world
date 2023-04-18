import { useContext } from 'react';

import styles from './Home.module.css'

import { MemeContext } from '../../contexts/memeContext';
import { MemeCard } from "../MemeCard/MemeCard";

const Home = () => {

    const { memes } = useContext(MemeContext);

    return (
        <section>
           <div className={styles.imgContainer}>
            <img className={styles.img} src="/allMemes.png" alt="" />
           </div>
            <div className={styles.main}>
                {memes?.length > 0
                    ? memes.map(x => <MemeCard key={x._id} meme={x} />)
                    : <h3 className={styles.noMemes}>No memes yet</h3>
                }
            </div>
        </section>
    )
}

export default Home;
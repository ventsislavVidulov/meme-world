import { useState, useEffect, useContext } from 'react';
import {
    Link,
    useParams
    // , useNavigate 
} from 'react-router-dom';

import styles from './Details.module.css'

import { getOne } from '../../services/memeService';
import { AuthContext } from '../../contexts/authContext';

const Details = () => {
    const [currentMeme, setCurrentMeme] = useState({});
    const { memeId } = useParams();
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();
    let isOwner = false;

    useEffect(() => {
        getOne(memeId)
            .then(memeData => {
                setCurrentMeme(memeData);
            })
            .catch(error => console.log(error))
    }, [memeId])

    if (user._id === currentMeme._ownerId) {
        isOwner = true;
    }

    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <h1>{currentMeme.title}</h1>
                <img className={styles.image} src={currentMeme.imgUrl} alt='' />
                <div className={styles.description}> {currentMeme.description}</div>
                {isOwner ?
                    <>
                        <button><Link to={`edit`}>EDIT</Link></button>
                        <button><Link to={`delete`}>DELETE</Link></button>
                    </> :
                    <></>
                }

            </div>
        </div>
    )
}

export default Details;
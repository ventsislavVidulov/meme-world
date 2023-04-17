import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Header.module.css';
import { AuthContext } from '../../contexts/authContext';

const Header = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
        <header >
            <div className={styles["container"]}>
                <div className={styles["logo-container"]}>
                    <Link to={"/"}>
                        <img className={styles.img} src="/memeLogo.png" alt="" />
                    </Link>
                </div>
                {user.fname
                    ? <>
                        <button>
                            <Link to={"/logout"}>
                                Log out
                            </Link>
                        </button>
                        <button>
                            My memes
                        </button>
                        <button>
                            <Link to={"/create"}>
                                Create meme
                            </Link>

                        </button>
                    </>
                    : <>
                        <button>
                            <Link to={"/login"}>
                                Log in
                            </Link>
                        </button>
                        <button>
                            <Link to={"/register"}>
                                Register
                            </Link>
                        </button>
                    </>
                }
            </div>
        </header>
    );
}

export default Header;
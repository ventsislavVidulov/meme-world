import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <button>
                Log in
            </button>
            <button>
                Register
            </button>
            <button>
                Log out
            </button>
            <button>
                My memes
            </button>
        </header>
    );
}

export default Header;
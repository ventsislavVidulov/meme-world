import { register } from '../../services/authService';
import styles from './Register.module.css'

const Register = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
            fname,
            lname
        } = Object.fromEntries(new FormData(e.target));

        //   console.log(email, password, fname, lname);

        register(email, password, fname, lname)
            .then(authData => {
                console.log(authData);
            })
    }

    return (
        <div className={styles.container}>
            <h1>REGISTRATION FORM</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.double}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fname">First Name</label>
                        <input className={styles.rounded} type="text" name="fname" id="fname" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="lname">Last Name</label>
                        <input className={styles.rounded} type="text" name="lname" id="lname" />
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input className={styles.rounded} type="text" name="email" id="email" />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input className={styles.rounded} type="password" name="password" id="password" />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="re-pass">Confirm password</label>
                    <input className={styles.rounded} type="password" name="re-pass" id="re-pass" />
                </div>
                <div className={styles.margin}>
                    <input type="checkbox" name="accept" id="accept" />
                    <label htmlFor="accept">
                        I accept the Terms of Use &amp; Privacy Policy.
                    </label>
                </div>
                <button type="submit" className={styles.rounded & styles.margin}>
                    REGISTER NOW
                </button>
            </form>
        </div>

    );
}

export default Register;
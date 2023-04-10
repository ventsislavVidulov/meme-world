import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import styles from './Register.module.css';

import { register } from '../../services/authService';
import { AuthContext } from "../../contexts/authContext";

const Register = () => {

const{ userLogin } = useContext(AuthContext);
const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
            confirmPassword,
            fname,
            lname
        } = Object.fromEntries(new FormData(e.target));

        //   console.log(email, password, fname, lname);

        if (password !== confirmPassword) {
            return;
        }

        register(email, password, fname, lname)
            .then(authData => {
                userLogin(authData);
                navigate('/');
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
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input className={styles.rounded} type="password" name="confirmPassword" id="confirmPassword" />
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
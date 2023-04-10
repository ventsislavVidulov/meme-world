// import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";
import { login } from '../../services/authService';
import styles from './Login.module.css'

const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        // console.log(email, password);

        login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.container}>
            <h1>LOGIN FORM</h1>
            <form onSubmit={onSubmit}>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input className={styles.rounded} type="text" name="email" id="email" />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input className={styles.rounded} type="password" name="password" id="password" />
                </div>

                <button type="submit" className={styles.rounded & styles.margin}>
                    LOGIN
                </button>
            </form>
        </div>

    );
}

export default Login;
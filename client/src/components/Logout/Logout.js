import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/authContext";

const Logout = () => {
    const navigate = useNavigate();

    const {user, userLogout} = useContext(AuthContext);
    console.log(`${user} by Logout`);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/')
            })

    });
}

export default Logout;
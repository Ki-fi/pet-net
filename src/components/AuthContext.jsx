import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LoadingState from "./loading-state/LoadingState.jsx";
import isTokenValid from "../helpers/isTokenValid.js";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (token && isTokenValid(token) && storedUser) {
            const user = JSON.parse(storedUser);
            setAuth({
                isAuth: true,
                user,
                status: 'done',
            })
        } else {
            logout();
        }
    }, [])


    function signin(userDetails) {
        localStorage.setItem('token', userDetails.token);
        localStorage.setItem('user', JSON.stringify(userDetails.user));
        setAuth({
            isAuth: true,
            user: userDetails.user,
            status: 'done',
        });
        navigate("/buurtgroep");
    }

    function logout() {
        localStorage.removeItem("token");
        setAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate("/login");
    }

    const data = {
        isAuth: auth.isAuth,
        signin,
        logout
    };

    return (
        <AuthContext.Provider
            value={data}
        >
            {auth.status === 'done' ? children : <LoadingState/>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
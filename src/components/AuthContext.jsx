import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LoadingState from "./loading-state/LoadingState.jsx";
import {jwtDecode} from "jwt-decode";
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
        if (token && isTokenValid(token)) {
            const decoded = jwtDecode(token);
            setAuth({
                isAuth: true,
                user: {
                    email: decoded.sub || decoded.email,
                },
                status: 'done',
            })
        } else {
            logout();
        }
    }, [])


    function signin(userDetails) {
        localStorage.setItem('token', userDetails.token);
        setAuth({
            isAuth: true,
            user: {
                email: userDetails.user.email
            },
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
        userId: 1,
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
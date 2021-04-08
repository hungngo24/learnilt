import { createContext, useReducer } from "react";
import axios from "axios";
import { AuthReducer } from "../reducers/authReducer";
import { urlAPI, LOCAL_TOKEN_NAME } from "./constants";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    });

    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${urlAPI}/auth/login`, userForm);
            if (response.data.success) {
                localStorage.setItem(LOCAL_TOKEN_NAME, response.data.token);
            }
            return response.data;
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const AuthContextData = {
        authState,
        dispatch,
        loginUser,
    };
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

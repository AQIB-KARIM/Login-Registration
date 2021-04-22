import React, { useReducer } from 'react';
import axios from "axios";
import AuthContext from '../auth/AuthContext';
import AuthReducer from '../auth/AuthReducer';
import AuthToken from './tokenAuth';
import {
    REGISTER_USER,
    LOAD_USER,
    LOGIN_USER,
    LOGOUT,
    REGISTRATION_FAILED,
    LOGIN_FAILED,
    AUTH_ERROR
} from '../user/action';




const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Load User_Account
    const loaduser = async () => {
        if (localStorage.token) {
            AuthToken(localStorage.token);
        }
        try {
            const res = await fetch.get('/api/auth')
            dispatch({
                type: LOAD_USER,
                payload: res.data
            });
            loaduser();
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
            })
        }
    }




    // Register_User

    const registeruser = async formData => {
        const config = {

            headers: {
                'Content-Type': 'application/json'

            },

        }
        try {
            const res = await fetch.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            });
        }
        catch (err) {
            dispatch({
                type: REGISTRATION_FAILED,
                payload: err.response.data.msg
            })
        }
    }


    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            registeruser
        }}>

            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState

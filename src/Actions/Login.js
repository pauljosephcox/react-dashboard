
import { auth } from '../config/Firebase'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';


/**
 * Validate Session
 * @param sessionId string
 */

export function validateSession(sessionId){

    return function (dispatch){

        dispatch(validatingSession());

        // TODO: Validate Against The Server
        if(sessionId) dispatch(logInSuccess(sessionId))
        else dispatch(logInError(sessionId));


    }

}

function validatingSession(){

    return {
        type: 'VALIDATING_SESSION',
        email: null,
        frontend: 'loading',
        sessionValidated: false
    }
}

function loggingIn(email){

    return {
        type: 'USER_LOGGING_IN',
        email: null,
        frontend: 'loading',
        sessionValidated: false
    }
}

function logInSuccess(email){

    // Save Cookie
    // TODO: Use Session From Server
    cookies.set('sessionid', email, { path: '/' });

    return {
        type: 'USER_LOGIN',
        email: email,
        authenticated: true,
        frontend: 'success',
        session: email,
        sessionValidated: true
    }
}

function logInError(email){

    return {
        type: 'USER_LOGIN_ERROR',
        email: null,
        authenticated: false,
        frontend: 'error',
        session: false,
        sessionValidated: true
    }
}

export function logIn(email,password){

    return function (dispatch){

        // Set The State To Loggin In
        dispatch(loggingIn(email));

        // Set Ajax Request
        // TODO: Move here. Currently in the login component.
        let success = true;
        if(success){
            dispatch(logInSuccess(email))
        } else {
            dispatch(logInError(email));
        }

    }
}

// LOG OUT
function loggingOut(email){

    return {
        type: 'USER_LOGGING_OUT',
        email: null
    }
}

function logOutSuccess(email){

    cookies.remove('sessionid', { path: '/' });

    return {
        type: 'USER_LOGOUT',
        email: email,
        authenticated: false,
        session: null
    }
}

function logOutError(email){
    return {
        type: 'USER_LOGOUT_ERROR',
        email: null
    }
}

export function logOut(email){

    return function (dispatch){

        // Set The State To Loggin In
        dispatch(loggingOut(email));

        // Set Ajax Request
        let success = true;
        if(success){
            dispatch(logOutSuccess(email))
        } else {
            dispatch(logOutError(email));
        }

    }
}

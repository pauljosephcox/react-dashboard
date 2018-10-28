import firebase from 'firebase';
import { auth } from '../config/Firebase';

// ------------------------------------
//
// Create Account
//
// ------------------------------------




// TODO: Error handling

export function createAccount(email,password){

    return async function (dispatch){

        auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                firebase.firestore().collection('users').doc(res.user.uid).set({});
                dispatch(createAccountSuccess(email));
            })
            .catch((error) => {

                dispatch(createAccountError(error));

            });


    }

}

function createAccountSuccess(email){
    return {
        type: 'USER_CREATE_ACCOUNT_ERROR',
        authenticated: true,
        error: null,
        email: email
    }
}

function createAccountError(e){
    return {
        type: 'USER_CREATE_ACCOUNT_ERROR',
        authenticated: false,
        error: e
    }
}




export function logoutAccount(){

    return async function (dispatch){

        auth.signOut();

    }

}



// ------------------------------------
//
// RESET PASSWORD
//
// ------------------------------------

export function resetPassword(password){

    return async function (dispatch){

        auth.currentUser.updatePassword(password);

    }

}

export function requestPasswordReset(email){

    return async function (dispatch){

        auth.sendPasswordResetEmail(email).then((item)=>{
            dispatch(requestPasswordResetSuccess(email))
        }).catch((e) => {
            dispatch(requestPasswordResetError(e));
        })

    }

}



function requestPasswordResetSuccess(email){
    return {
        type: 'USER_RESET_PASSWORD_SUCCESS',
        email: email,
        success: "We've just sent you an email. Follow the instructions to reset your password."
    }
}

function requestPasswordResetError(e){
    return {
        type: 'USER_RESET_PASSWORD_ERROR',
        authenticated: true,
        error: e
    }
}

// ------------------------------------
//
// Update Account
//
// ------------------------------------

function updatingAccount(email){
    return {
        type: 'USER_UPDATING_ACCOUNT',
    }
}

function updateAccountSuccess(email){
    return {
        type: 'USER_UPDATE_SUCCESS',
        email: email
    }
}

function updateAccountError(e){
    return {
        type: 'USER_UPDATE_ERROR',
        authenticated: true,
        error: e
    }
}

export function updateAccount(uid, email, first, last){

    return function (dispatch){

        // Set The State To Loggin In
        dispatch(updatingAccount(email));

        let data = {};
        data.firstname = (first) ? first : null;
        data.lastname = (last) ? last : null;

        firebase.firestore().collection('users').doc(uid).set(data)
            .then((item) => {

                auth.currentUser.updateEmail(email).then((item)=>{
                    dispatch(updateAccountSuccess(email))
                }).catch((e) => {
                    dispatch(updateAccountError(e));
                })

            })
            .catch((e) => {
                dispatch(updateAccountError(e));
            });
    }
}

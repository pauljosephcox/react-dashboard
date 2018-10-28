/**
 * User Reducers
 */

export default (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return Object.assign({}, state, {
                fbUser: action.user,
            })

        case 'VALIDATING_SESSION':
             return Object.assign({}, state, {
                 email: action.email,
                 authenticated: action.authenticated,
                 plan: action.plan,
                 session: action.session,
                 sessionValidated: action.sessionValidated
             })
        case 'USER_UPDATE_SUCCESS':
        case 'USER_CREATE_ACCOUNT_SUCCESS':
            return Object.assign({}, state, {
                email: action.email,
                error: null,
            })
        case 'USER_LOGOUT':
            return {}

        case 'USER_RESET_PASSWORD_SUCCESS':
            return Object.assign({}, state, {
                email: action.email,
                error: null,
                success: action.success
            })

        case 'USER_LOGIN_ERROR':
        case 'USER_UPDATE_ERROR':
        case 'USER_RESET_PASSWORD_ERROR':
        case 'USER_CREATE_ACCOUNT_ERROR':
            return Object.assign({}, state, {
                error: action.error,
            })




    }
    return state;
}

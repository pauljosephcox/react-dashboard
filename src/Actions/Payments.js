
function subscriptionSuccess(plan){

    return {
        type: 'USER_SUBSCRIPTION_SUCCESS',
        plan: plan,
        planError: null
    }
}

function subscriptionError(error){

    return {
        type: 'USER_SUBSCRIPTION_SUCCESS',
        plan: null,
        planError: error
    }
}

export function processSubscription(plan,token){

    return function (dispatch){

        // TODO: Call Cloud Function

        setTimeout(function(){
            let success = true;
            if(success){
                dispatch(subscriptionSuccess(plan))
            } else {
                dispatch(subscriptionError('theres an error'));
            }
        },2000)

    }
}

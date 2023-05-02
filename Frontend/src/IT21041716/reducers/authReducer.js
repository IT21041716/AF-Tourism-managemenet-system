import { authConstants } from "../actions/constants";

const initState ={
    user: {},
    sellers:[],
    authenticated: false,
    authenticating: false,
    loading: false,

}

export default(state =initState,action) => {
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
        break
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                authenticating: false,
                authenticated:true,
                user:action.payload.user
            }
        break
        case authConstants.LOGIN_FALIURE:
            state = {
                ...state,
                authenticating: false,
            }
        break
        case authConstants.SIGN_UP_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break
        case authConstants.SIGN_UP_SUCCESS:
            state = {
                ...state,
                authenticating: false,
                user: action.payload,
                sellers: action.payload
            }
        break
        case authConstants.SIGN_UP_FAILURE:
            state = {
                ...state,
                authenticating: false,
            }
        break

    }
}
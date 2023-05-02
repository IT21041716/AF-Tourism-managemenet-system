import { authConstants } from "./constants";
import {toast} from 'react-hot-toast'
import { axiosInstance } from "../helpers/axios";


export const Login = (data) => {
    return async(dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST})
        const res = await axiosInstance.post('/Seller/Signin', data)
        if (res.status === 200) {
            const user = res.data.payload
            const token = res.data.token
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            toast.success(`Login Success, Welcome ${user.registeredSeller.Personal_name} `, {
                id: "login"
            })

            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    user,
                    token
                }
            })
        }

        else if (res.status === 401) {
            toast.error("Invalid Password..!")
            dispatch({
                type: authConstants.LOGIN_FALIURE
            })
        }
        else if (res.status === 404) {
            toast.error("Invalid Email Address..!")
            dispatch({
                type: authConstants.LOGIN_FALIURE
            })
        }
    }
}
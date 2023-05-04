import { authConstants } from "./constants";
import { toast } from 'react-hot-toast'
import { axiosInstance } from "../helpers/axios";


export const Login = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.LOGIN_REQUEST })
            const res = await axiosInstance.post('/Seller/Signin', data)
            if (res.status === 200) {
                const user = res.data.payload
                const token = res.data.token
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                toast.success(`Login Success, Welcome ${user.Personal_name} `, {
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


        } catch (error) {
            console.log(error)
        }


    }
}


export const SignUp = (user, log) => {
    console.log("Action eke " + user.ProfilePicture)
    return async (dispatch) => {

        dispatch({ type: authConstants.SIGN_UP_REQUEST })
        const res = await axiosInstance.post('/Seller/Signup', user)
        if (res.status === 201) {
            const email = log.Company_email
            const pwd = log.Password
            const form3 = {
                Company_email: email,
                Password: pwd
            }
            console.log(form3)
            dispatch(Login(form3))
            dispatch({
                type: authConstants.SIGN_UP_SUCCESS,
                payload: res.data.payload
            })
        }



        else {
            if (res.status === 401) {
                toast.error("Somthing Went Wrong In Account Creating..!")
                dispatch({
                    type: authConstants.SIGN_UP_FAILURE,
                    payload: res.error
                })
            }

            else if (res.status === 400) {
                toast.error("Email Already Registered...!")
                dispatch({
                    type: authConstants.SIGN_UP_FAILURE
                })
            }
        }
    }
}

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST })
        localStorage.clear();

        toast.success("Logout successfull..!", {
            id: "logout"
        })
        dispatch({
            type: authConstants.LOGOUT_SUCCESS
        })


    }
}

export const isLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token,
                        user
                    }
                })
            }

        } else {
            dispatch({
                type: authConstants.LOGIN_FALIURE,
                payload: { error: 'Failed to login' }
            })
        }
    }
}
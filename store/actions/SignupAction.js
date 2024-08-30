// import { step } from "@material-tailwind/react";
import { getCookie, setCookie } from "cookies-next";
import { RESEND_OTP, RESEND_OTP_FAILURE, RESEND_OTP_SUCCESS, RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP, RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP, RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP, RESET_EMAIL_PASSWORD_FIRST_STEP, RESET_EMAIL_PASSWORD_SECOND_STEP, RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP, RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP, RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP, RESET_EMAIL_PASSWORD_THIRD_STEP, RESET_PASSWORD_STEP, RESET_STEPS, SIGNUP_FIRST_STEP, SIGNUP_FIRST_STEP_FAILURE, SIGNUP_FIRST_STEP_SUCCESS, SIGNUP_SECOND_STEP, SIGNUP_SECOND_STEP_FAILURE, SIGNUP_SECOND_STEP_SUCCESS, SIGNUP_THIRD_STEP, SIGNUP_THIRD_STEP_FAILURE, SIGNUP_THIRD_STEP_SUCCESS } from "../type"

export const SendCodeAction = (credentials) => {
    return async (dispatch) => {

        dispatch({ type: SIGNUP_FIRST_STEP })

        const axios = require('axios');
        let data = credentials;

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCookie("email", credentials.email)
                setCookie("uname", credentials?.name)
                dispatch({
                    type: SIGNUP_FIRST_STEP_SUCCESS,
                    payload: {
                        step: 1,
                        data: response.data,
                        message: response.data.data
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: SIGNUP_FIRST_STEP_FAILURE,
                    payload: {
                        step: 0,
                        message: error
                    }
                })
                console.log(error);
            });

    }
}

export const SubmitOTPAction = (Otp) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_SECOND_STEP })

        const axios = require('axios');
        const email = getCookie("email")
        const DeviceToken = getCookie("fcmToken")
        let data = {
            "email": email,
            "otp": Otp,
            "deviceToken": DeviceToken

        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/verify-otp-email`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                AfterOTPSubmit(response)

                dispatch({
                    type: SIGNUP_SECOND_STEP_SUCCESS,
                    payload: {
                        step: 2,
                        data: response.data,
                        message: response.data.message
                    }
                })

            })
            .catch((error) => {
                dispatch({
                    type: SIGNUP_SECOND_STEP_FAILURE,
                    payload: {
                        step: 1,
                        message: error
                    }
                })
                console.log(error);
            });

    }
}


const AfterOTPSubmit = (response) => {
    const theData = response.data.data;
    localStorage.setItem("token", theData.tokens.access.token);
    localStorage.setItem("refoken", theData.tokens.refresh.token);
    localStorage.setItem("modal", "open");
    localStorage.setItem("platform-choose", true)

    setCookie("jwtToken", theData.tokens.access.token);
    setCookie("authtoken", theData.tokens.refresh.token);
    setCookie("email", theData.user.email);
}


export const SubmitPasswordAction = (credentials) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_THIRD_STEP })

        const axios = require('axios');

        const Token = getCookie('authtoken')

        let data = JSON.stringify({
            "password": credentials.password
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`,
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };


        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));

                dispatch({
                    type: SIGNUP_THIRD_STEP_SUCCESS, payload: {
                        step: 3,
                        data: response.data.data,
                        message: "Signin Successfully"
                    }
                })

                AfterPasswordSubmit(response)
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: SIGNUP_THIRD_STEP_FAILURE,
                    payload: {
                        error: error,
                        message: "Something Went Wrong"
                    }
                })
            });

    }
}


const AfterPasswordSubmit = (response) => {
    setCookie('userName', response.data.userData.name);
    console.log("userInfo : ", response?.data)
    localStorage.setItem("personal", JSON.stringify(response?.data?.userData))
    setCookie('userid', response.data.userData.id);
    localStorage.setItem("UserRegister", true)

}

export const ResetSteps = () => {
    return async (dispatch) => {
        dispatch({
            type: RESET_STEPS,
            payload: {
                step: 0,
            }
        })
    }
}


export const ResendOTP = () => {
    return async (dispatch) => {
        dispatch({
            type: RESEND_OTP
        })

        const axios = require('axios');
        const email = getCookie("email")
        let data = JSON.stringify({
            "email": email
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/send-verify-otp-email`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));

                dispatch({
                    type: RESEND_OTP_SUCCESS
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: RESEND_OTP_FAILURE
                })
            });

    }
}

export const ResetEmailPasswordFirstStep = (UserEmail) => {
    return async (dispatch) => {

        dispatch({
            type: RESET_EMAIL_PASSWORD_FIRST_STEP
        })

        const axios = require('axios');
        let data = JSON.stringify({
            "email": UserEmail
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://happymilan.tech/api/v1/user/auth/forgot-password',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP
                })
            });


    }
}
export const ResetEmailPasswordSecondStep = (Credentials) => {
    return async (dispatch) => {

        dispatch({
            type: RESET_EMAIL_PASSWORD_SECOND_STEP
        })

        const axios = require('axios');
        let data = JSON.stringify({
            "email": Credentials?.email,
            "otp": Credentials?.otp
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://happymilan.tech/api/v1/user/auth/verify-reset-otp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP
                })
            });



    }
}
export const ResetEmailPasswordThirdStep = (Credentials) => {
    return async (dispatch) => {
        dispatch({
            type: RESET_EMAIL_PASSWORD_THIRD_STEP
        })

        const axios = require('axios');
        let data = JSON.stringify({
            "password": Credentials?.password,
            "email": Credentials?.email,
            "otp": Credentials?.otp
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://happymilan.tech/api/v1/user/auth/reset-password',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP
                })
            });

    }
}

export const ResetPasswordStep = () => {
    return async (dispatch) => {
        dispatch({
            type: RESET_PASSWORD_STEP
        })
    }
}
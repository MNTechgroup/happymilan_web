import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Input,
} from "@material-tailwind/react";

const SignInEmail = ({setviaEmail}) => {
    return (
        <>
            <div className="">
                <div className="flex justify-center p-5 py-[30px]">
                    <img src="/assests/Black/Message.svg" className="m-2" />
                    <h1 id="signin-phone-title" className="m-2">Sign up using Mobile</h1>
                </div>
                <div>
                    <div className="grid place-items-center">
                        <div className="w-72 m-2">
                            <Input label="Enter your email ID" />
                        </div>
                        <div className="w-72 m-2">
                            <Input label="New Password" />
                        </div>
                        <div className="w-72 m-2">
                            <Input label="Confirm Password" />
                        </div>
                        <div className="mt-[30px]">
                            <button className="flex items-center  w-[300px] h-[50px]" id="Send-otp-btn"><span className="mx-auto">Start Registration</span> <img src="/vector.svg" className="mr-[15px]" /></button>
                        </div>
                        <div>
                            <h1 className="cursor-pointer my-[50px]" onClick={() => { setviaEmail(false) }} id="already-signup-text">Already Registered? Login</h1>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignInEmail;
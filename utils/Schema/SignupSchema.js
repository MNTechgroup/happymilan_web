import * as Yup from 'yup';

export const SignupSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(25, "Name cannot be more than 25 characters")
        .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
        .required("Please Enter Your Name"),
    email: Yup.string().email("Invalid email address").required("Please Enter your Email"),
});

export const PasswordSchema = Yup.object({
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(8, "Password must be at most 8 characters")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,8}$/, "Must include letters and numbers")
        .required("Please Enter your Password"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Please confirm your Password"),
});


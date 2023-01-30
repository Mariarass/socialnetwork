import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .email('Enter a valid email'),

    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});



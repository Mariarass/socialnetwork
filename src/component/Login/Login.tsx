import {useFormik} from 'formik';
import {Button, Checkbox, FormControlLabel, IconButton, TextField} from "@mui/material";
import * as yup from 'yup';
import React, {useState} from 'react';
import s from './Login.module.css'
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {AppDispatch} from "../../redux/store";
import {useDispatch} from "react-redux";
import {loginThunk} from "../../redux/reducers/auth-reducer";

type Values = {
    email: string;
    password: string

};
const validationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .email('Enter a valid email'),

    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const dispatch: AppDispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: validationSchema,
        onSubmit: (values, {setSubmitting, setStatus}) => {
            dispatch(loginThunk(values.email, values.password, values.rememberMe, setStatus))
            setSubmitting(false);


        },
    });

    return (
        <div className={s.login}>
            <div>
                <h3>Login</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div>


                        <TextField
                            sx={{mb: 4, width: 400}}
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                    </div>
                    <div>
                        <TextField
                            sx={{mb: 4, width: 400}}
                            id="password"
                            name="password"
                            label="Password"
                            type={show ? "text" : "password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={handleClick}>
                                        {show ? <VisibilityOff/> : <Visibility/>}

                                    </IconButton>
                                ),
                            }}
                        /></div>
                    <p>
                        {formik.status!= undefined && formik.status.message}
                    </p>


                    <FormControlLabel control={<Checkbox

                        name="rememberMe"
                        checked={formik.values.rememberMe}
                        onChange={formik.handleChange}
                    />} label="Remember me"/>

                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>

                </form>
            </div>
        </div>
    );
};

export default Login
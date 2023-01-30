import {useFormik} from 'formik';
import {Checkbox, FormControlLabel, IconButton} from "@mui/material";
import React, {useState} from 'react';
import s from './Login.module.css'
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {AppDispatch} from "../../redux/store";
import {useDispatch} from "react-redux";
import {loginThunk} from "../../redux/reducers/auth-reducer";
import loginPhoto from '../../assets/login.jpg'
import {pink} from '@mui/material/colors';
import {validationSchema} from '../../utils/validation/validation';
import {CssButton, CssInput} from '../../utils/style-for-mui/style-for-mui';


export const Login = () => {
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
        <div className={s.container}>
            <img src={loginPhoto} className={s.photo}/>
            <div className={s.loginContainer}>
                <div className={s.login}>
                    <h3 className={s.header}>Login into
                        your account</h3>

                    <form onSubmit={formik.handleSubmit}>
                        <div className={s.input}>
                            <CssInput
                                name="email"
                                placeholder={'Your email address'}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                            />
                            <p className={s.error}>
                                {formik.touched.email && formik.errors.email}
                            </p>
                        </div>
                        <div>
                            <CssInput

                                id="password"
                                name="password"
                                placeholder="Password"
                                type={show ? "text" : "password"}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}

                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleClick}>
                                            {show ? <VisibilityOff/> : <Visibility/>}

                                        </IconButton>
                                    ),
                                }}
                            />
                            <p className={s.error}>
                                {formik.touched.password && formik.errors.password}
                            </p>
                        </div>
                        <p className={s.error}>
                            {formik.status != undefined && formik.status.message}
                        </p>


                        <FormControlLabel control={<Checkbox
                            name="rememberMe"
                            checked={formik.values.rememberMe}
                            onChange={formik.handleChange}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />} label="Remember me"/>

                        <CssButton fullWidth type="submit">
                            Submit
                        </CssButton>

                    </form>
                </div>

            </div>


        </div>
    );
};

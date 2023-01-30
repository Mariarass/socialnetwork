import {styled} from "@mui/material/styles";
import {Button, TextField} from "@mui/material";

export const CssInput = styled(TextField)({

    color: '#AED5D2',
    fontSize: 10,
    marginBottom: 15,
    width: '350px',
    borderRadius: 4,
    border: '2px solid #e9e9e9',
    fontFamily: 'Montserrat',


    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(145, 158, 171, 0.01)',

        },
        '&:hover fieldset': {
            borderColor: 'rgba(145, 158, 171, 0.01)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(145, 158, 171, 0.01)',
        },
    },

})

export const CssButton = styled(Button)({
    background: '#ec3553',
    borderRadius: 20,
    color: 'white',
    fontFamily: 'Montserrat',
    margin: 0,
    padding: 0,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,

    ':hover': {
        background: '#b21d36',
    },
    ':disabled':{
        background: '#d06073',
    }

})

export const ButtonFollow = styled(Button)({
    background: '#b21d36',

})
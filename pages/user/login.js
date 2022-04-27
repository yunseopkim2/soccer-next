import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import tableStyles from '../../styles/Table.module.css'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {styled} from '@mui/material/styles';
import {purple} from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});
const ColorButton = styled(Button)(({theme}) => ({
    color: theme
        .palette
        .getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700]
    }
}));

export default function  Login(){
    const [login, setLogin] =useState({
        userid:'', password:''
    })
    const dispatch = useDispatch()
    const handleChange = e=>{
        e.preventDefault()
        const{name, value} = e.target;
        setLogin({...login,[name]: value})
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            dispatch(userActions.loginRequest(login))
            setLogin({
                userid:'', password:''
            })
        }
    }
    >
        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOx3ICIIaQaKmfxlhiZNU2lh7ST07Hxmjsw&usqp=CAU"/>
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <TextField id="outlined-basic" label="USERID" type="text" name='userid' onChange={handleChange}/>
                <TextField id="outlined-basic-2" label="PASSWORD" type="text" name='password' onChange={handleChange}/>
            </Stack>
            <Stack spacing={2} direction="row" style={{marginTop:"20px", float: "left"}}>
                <ColorButton  type="submit" variant="contained" style={{width:"100px"}}>로그인</ColorButton>
                <BootstrapButton variant="contained" disableRipple="disableRipple" style={{width:"100px"}}>
                    취소
                </BootstrapButton>
            </Stack>
        </LocalizationProvider>

            
        
    </form>
}
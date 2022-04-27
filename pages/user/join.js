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
import { purple } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
export default function  Join(){
    const [user, setUser] =useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    const handleClick = e => {
        window.location.href = "./login"
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            dispatch(userActions.joinRequest(user))
            setUser({
                userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
            })
        }
    }
    >
        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOx3ICIIaQaKmfxlhiZNU2lh7ST07Hxmjsw&usqp=CAU"/>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={1.5} style={{width:"500px"}}>
                <TextField id="outlined-basic" label="USERID" type="text" name='userid' onChange={handleChange}/>
                <TextField id="outlined-basic-2" label="PASSWORD" type="text" name='password' onChange={handleChange}/>
                <TextField id="outlined-basic-2" label="EMAIL" type="text" name='email' onChange={handleChange}/>
                <TextField id="outlined-basic-2" label="NAME" type="text" name='name' onChange={handleChange} />
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">GENDER</InputLabel>
      <Select
        labelId="demo-select-small" id="demo-select-small" onChange={handleChange}>
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={5}>남성</MenuItem>
        <MenuItem value={5}>여성</MenuItem>
      </Select>
                </FormControl>
                <TextField id="outlined-basic-2" label="PHONE" type="text" name='phone' onChange={handleChange}/>
                <TextField id="outlined-basic-2" label="BIRTH" type="text" name='birth' onChange={handleChange}/>
                <TextField id="outlined-basic-2" label="ADDRESS" type="text" name='address' onChange={handleChange}/>
            </Stack>
            <Stack spacing={2} direction="row" style={{marginTop:"20px" }}>
                <ColorButton  type="submit" variant="contained" style={{width:"200px"}}>회원가입</ColorButton>
                <BootstrapButton variant="contained" disableRipple="disableRipple" style={{width:"200px"}}>
                    취소
                </BootstrapButton>
            </Stack>
        </LocalizationProvider>
    </form>
}
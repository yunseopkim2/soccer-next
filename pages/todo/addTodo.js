import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../redux/reducers/todoReducer.ts';

export default function  Join(){
    const [todo, setTodo] =useState({
         userid:'', task:'', completed:''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setTodo({...todo,[name]: value})
    }
    return <><h1>스케줄 등록</h1>
    <form onSubmit={e => {
            e.preventDefault()
            alert(' 진행 1: 회원가입 클릭 ');
            dispatch(todoActions.addRequest(todo))
            setTodo({
                userid:'', task:'', completed:''
            })
        }
    }
    >
  
    <div>
    <label><b>사용자ID</b></label>
    <input type="text" name='userid' onChange={handleChange} /><br />

    <label htmlFor=""><b>일정</b></label>
    <input type="text" name='task' onChange={handleChange}/><br />

    <label htmlFor=""><b>너와 나의 약속</b></label>
    <input type="text" name='completed' onChange={handleChange}/><br />

    <button type="submit">확 인</button><br />
    
    </div>
    </form>
    </>
}
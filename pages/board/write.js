import axios from "axios";
import { board } from "board";
import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import style from '/pages/board/styles/board-form.module.css'
import { boardActions } from '../../redux/reducers/boardReducer.ts'
export default function BoardhtmlhtmlForm() {

      const [board, setBoard] =useState({
         passengerId:'', name:'', teamId:'', subject:''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setBoard({...board,[name]: value})
    }
   
    return (<>
        <h1>게시물 등록</h1>
           <form onSubmit={e => {
            e.preventDefault()
            alert(' 진행 1: 회원가입 클릭 ');
            dispatch(boardActions.joinRequest(board))
            setBoard({
                passengerId:'', name:'', teamId:'', subject:''
            })
        }
    }
    >
  
        <div className={style.container}>
            
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="passengerId" name="passengerId" placeholder="글 제목 입력"/>
                </div>
                </div>
                
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="teamId">응원팀</label>
                </div>
                <div className={style.col75}> 
                        <select id="teamId" name="teamId" onChange={handleChange}>
                             <option value="">응원팀 선택</option>
                    <option value="K09" >Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject"  style={{height:200 + "px"}} onChange={handleChange}></input>
                </div>
                    </div>
            </div>
                    
            <br/>
            <div className={style.row}>
                        <input className={style.inputSubmit} type="submit" value="submit" /><br />
                 <div> <span id='result-span'></span></div>
                </div>
        
        
            </div>
            </form>
    </>)
}
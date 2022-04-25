import axios from "axios";
import styled from '/pages/common/styles/table.module.css'
import React, {useEffect, useState} from "react";
import tableStyles from '../common/styles/table.module.css'

const Table = ({ columns, colSpan, data }) => {
    const [value, setValue] =useState('')
    return (
      <>
           <h3>{data.length}개 남은 일정</h3>
            
      <table className={tableStyles.table}> 
          <thead>
            <tr className={tableStyles.tr}  >
            {columns.map((column, index) => (
                  <th className={tableStyles.td} key={index}>{column}</th>
            ))}
          </tr>
  
       
      </thead>
      <tbody>
      { data.length == 0  ?<tr className={tableStyles.tr}>
                                      <td colSpan={colSpan} className={tableStyles.td}>일정이 없습니다</td>
                                      </tr>
                :data.map((todo) => (
                <tr className={tableStyles.tr}  key={todo.userid} >
                    <td className={tableStyles.td}>{ todo.userid}</td>
                  <td className={tableStyles.td}>{todo.task}</td>
                  <td className={tableStyles.td}>{todo.completed}</td>
                
                </tr>
            ))}
      </tbody>
                </table>
                
     </>
      
  )
  
}

export default function Todolist() {
    const columns = [ 'Userid','Task','Completed'];
  const [data, setData] = useState([])
   useEffect(()=>{
      axios.get('http://localhost:5000/api/todo/list').then(res=>{
        setData(res.data.todos)
      }).catch(err=>{})
    },[])
  return (<>
    <h1>스케줄 목록</h1>
      <div>
          <Table columns={columns} data={data} colSpan={4}/>
    </div>
    
    </>
  )
}
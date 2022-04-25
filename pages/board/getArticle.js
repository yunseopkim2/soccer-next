import axios from "axios";
import styled from '/pages/common/styles/table.module.css'
import React, {useEffect, useState} from "react";
import tableStyles from '../common/styles/table.module.css'

const Table = ({ columns, colSpan, data }) => {
  return(
    <table className={styled.table}>
      <thead>
            <tr className={tableStyles.tr}  >
            {columns.map((column, index) => (
                  <th className={tableStyles.td} key={index}>{column}</th>
            ))}
          </tr>
  
       
      </thead>
       <tbody>
                { data.length == 0  ?<tr className={tableStyles.tr}>
                                      <td colSpan={colSpan} className={tableStyles.td}>데이터가 없습니다</td>
                                      </tr>
                :data.map((board) => (
                <tr className={tableStyles.tr}  key={board.passengerId} >
                  
                  <td className={tableStyles.td}>{board.passengerId}</td>
                    
                  
                  <td className={tableStyles.td}>{board.subject}</td>
                  <td className={tableStyles.td}>{board.name}</td>
                  <td className={tableStyles.td}>{board.teamId}</td>
              
                </tr>
            ))}
            
        </tbody>
    </table>
  )
  
}

export default function Boardlist() {
  const columns = ["글번호", "제목", "작성자", "주제"];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/board/list').then(res => {
      setData(res.data.boards)
    }).catch(err => { })
    console.log(data)
  },[])
  return (<>
    <h1>게시판</h1>
    <div>
    <Table columns={columns} colSpan ={4} data={data}/>
    </div>
   
    </>
  )
}
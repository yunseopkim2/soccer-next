import axios from "axios";
import React,{useState} from "react"

export default function Grade() {
    
    const [inputs, setInputs] = useState({})
 
    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target;
        setInputs({...inputs, [name] : value})
    }
    const handleClick = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/grade', inputs).then(res => {
            const result = res.data
            document.getElementById('result-span').innerHTML = `
            <h3> 총점 : ${result.sum}</h3>
            <h3>평균 : ${result.avg}</h3>`
        }).catch(err=>alert(err))
    }
   
   
    return <>
        <h1>성적표</h1>
        <form  action="" onSubmit={handleClick}>
    <div>
    <label><b>Username</b></label>
    <input id="name" name="name" onChange={handleChange}/><br/>
    <label><b>kor</b></label>
    <input id="kor" name="kor" onChange={handleChange}/><br/>
    <label><b>eng</b></label>
    <input id="eng" name="eng" onChange={handleChange}/><br/>
    <label><b>math</b></label>
    <input id="math" name="math" onChange={handleChange}/><br/>
     <input type="submit" value="계산" /><br />
                      <div> <span id="result-span"></span></div>
            </div>
            </form>
    </>
}

import React, { useState } from "react"
import axios from "axios";

export default function Calc(){
    const [inputs, setInputs] = useState({})
    
    
    const handleChange = e =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    const handleClick = e => {
        e.preventDefault()
        
       axios.post('http://localhost:5000/api/basic/calc', inputs).then(res => {
            const calc = res.data
            document.getElementById('result-span').innerHTML =`
                <h3>숫자 : ${calc.num1} </h3>
                <h3>연산자 : ${calc.opcode} </h3>
                <h3>숫자 : ${calc.num2} </h3>
                <h3>${calc.calc}</h3>`
           
        }).catch(err=>alert(err))
    }
    return (
        <>
        <form  action="" onSubmit={handleClick}>
        <h1>Calc 폼</h1>
        <div>
            <label><b>number1</b></label>
            <input name="num1" type="" onChange={handleChange}/><br/>
            <label><b>opcode</b></label>
            <select name="opcode" onChange={handleChange}>
                <option value="+" selected>+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input name="num2" type="" onChange={handleChange}/><br/>
                    <input type="submit" value="계산" /><br />
                      <div> 결과 : <span id="result-span"></span></div>
        </div>
        </form>
        </>
    )
}
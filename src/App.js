import React from 'react';
import { useState } from "react";
import './App.css'; // You can create this CSS file to style your calculator layout.

function CalcLayout({label, onClick, buttonClassName = "CalcLayout"}) {
  return (
    <button className={buttonClassName} onClick ={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function AppLayout() {

  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[oper, setOper] = useState(null);
  const[num2, setNum2] = useState(null);


  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var num = value;
    if(oper === null) {
      if(num1 !== null) {
        num = num1 + num;
      }
      setNum1(num);            
      setDisp(num);            
    } else {
      if(num2 !== null) {
        num = num2 + num;
      }
      setNum2(num);            
      setDisp(num);       }
  }
  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    if (oper === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else if (oper === "-") {
        setDisp(parseInt(num1) - parseInt(num2));
    } else if (oper === "*") {
      setDisp(parseInt(num1) * parseInt(num2));
    } else if (oper === "/") {
      setDisp(parseInt(num1) / parseInt(num2));
    } else {
      setDisp("ERROR");
    }
  }
  

  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

const nameClickHandler = (e) => {
  e.preventDefault();
  alert("Display your name in the calculator display");
}

  return (
    <div className = "AppLayout">
    <div className="CalcContainer">
      <h1>Calculator of Carmela Sunga 
        - CPE3A</h1>
      <div className="display">My Calculator</div>
      <CalcDisplay display={disp} />
      <div className="button-row">
        <CalcLayout label={7} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={8} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={9} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={"/"} onClick={operatorClickHandler} />
      </div>
      <div className="button-row">
        <CalcLayout label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={"*"} onClick={operatorClickHandler} />
      </div>
      <div className="button-row">
      <CalcLayout label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={"-"} onClick={operatorClickHandler} />
      </div>
      <div className="button-row">
      <CalcLayout label={0} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
        <CalcLayout label={"="} onClick={equalClickHandler}/>
        <CalcLayout label={"C"} onClick={clearClickHandler} />
        <CalcLayout label={"+"} onClick={operatorClickHandler} />
      </div>

      <div className="Name">
          <CalcLayout label={"SUNGA"} onClick={nameClickHandler} buttonClassName={"CalcButtonName"}/>
        </div>
      </div>
      <div className="Notes">
        </div>
    </div>
  );
}

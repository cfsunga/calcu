import { useState } from 'react';
import './App.css';

function CalcDisplay({display}) {
  return (
    <div className="calcDisplay">
      {display}
    </div>
  );
}

function CalcButton({value, onClick}) {
  return (
    <button className="calcButton" onClick={onClick}>
      {value}
    </button>
  );
}

function NegativeButton({value,onClick}){
  return (
    <button className="calcButton" onClick={onClick}>
      negative
    </button>
  )
}

function ClearButton({value, onClick}){
  return (
    <button className="calcButton redcolor" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [oper, setOper] = useState(0);
  const [res, setRes] = useState(0);
  const [disp, setDisp] = useState(0);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (oper === 0) {
      if (parseInt(num1) === 0) {
        setNum1(value)
        setDisp(value);
      }
      else{
        if(String(num1).length<10){
          setNum1(num1+value)
          setDisp(num1+value);
        }
      }
    }
    else if(oper==="negative"){
      if (parseInt(num1) === 0) {
        setNum1("-"+value)
        setDisp("-"+value);
      }
      else{
        if(String(num1).length<10){
          setNum1(num1+value)
          setDisp(num1+value);
        }
      }
    }
    else if(oper!=="negative"){
      if (parseInt(num2) === 0) {
        setNum2(value)
        setDisp(value);
      }
      else{
        if(String(num2).length<10){
          setNum2(num2+value)
          setDisp(num2+value);
        }
      }
    }
    else{
      setDisp("Error negative only once at the beginning");
    }
    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
  };

  const operClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value)
    setDisp(value);

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
  };

  const equalClickHandler = () => {
    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);

    if(oper === "+")
    {
      setRes(parseInt(num1) + parseInt(num2));
      setDisp(parseInt(num1) + parseInt(num2));
    }

    else if (oper === "-")
    {
      setRes(parseInt(num1) - parseInt(num2));
      setDisp(parseInt(num1) - parseInt(num2));

    } else if(oper === "*")
    {
      setRes(parseInt(num1) * parseInt(num2));
      setDisp(parseInt(num1) * parseInt(num2));
    } else if(oper === "/")
    {
      setRes(parseInt(num1) / parseInt(num2));
      setDisp(parseInt(num1) / parseInt(num2));
    }
    else {
      setDisp("ERROR");
      setNum1(0);
      setNum2(0);
      setOper(0);
      setRes(0);
      setDisp(0);
    }
  };

  /*This is now working!*/
  const clearClickHandler = () => {
    setNum1(0);
    setNum2(0);
    setOper(0);
    setRes(0);
    setDisp(0);

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
  };

  return (
    <div className="calcContainer">
      <CalcDisplay display={disp}/>
      <div className="calcButtonsContainer">
        <CalcButton value="7" onClick={numberClickHandler}/>
        <CalcButton value="8" onClick={numberClickHandler}/>
        <CalcButton value="9" onClick={numberClickHandler}/>
        <CalcButton value="+" onClick={operClickHandler}/>
        <CalcButton value="6" onClick={numberClickHandler}/>
        <CalcButton value="5" onClick={numberClickHandler}/>
        <CalcButton value="4" onClick={numberClickHandler}/>
        <CalcButton value="-" onClick={operClickHandler}/>
        <CalcButton value="3" onClick={numberClickHandler}/>
        <CalcButton value="2" onClick={numberClickHandler}/>
        <CalcButton value="1" onClick={numberClickHandler}/>
        <CalcButton value="*" onClick={operClickHandler}/>
        <ClearButton value="C" onClick={clearClickHandler}/>
        <CalcButton value="0" onClick={numberClickHandler}/>
        <CalcButton value="=" onClick={equalClickHandler}/>
        <CalcButton value="/" onClick={operClickHandler}/>
        <NegativeButton value="negative" onClick={operClickHandler}/>
      </div>
    </div>
  );
}

export default App;
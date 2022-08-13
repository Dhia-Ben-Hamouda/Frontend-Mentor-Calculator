import React from "react";
import { useState } from "react";

const App = ()=>{
  const [res , setRes] = useState("");

  function addChar(event) {
		if (event.target.innerHTML === "." && res[res.length - 1] === ".") {
			return;
		}
		setRes(res + event.target.innerHTML);
	}

	function remove() {
		setRes("");
	}

	function removeOne() {
		if (res.length === 1) {
			setRes("");
			return;
		}
		setRes(res.slice(0, res.length - 1));
	}

	function calculate() {
		setRes(eval(res));
	}

  return(
    <>
      <div className="container">
        <div className="top">
          <h1>{res}</h1>
        </div>
        <div className="bottom">
          <button onClick={addChar}>7</button>
          <button onClick={addChar}>8</button>
          <button onClick={addChar}>9</button>
          <button onClick={removeOne} className="delete">DEL</button>

          <button onClick={addChar}>4</button>
          <button onClick={addChar}>5</button>
          <button onClick={addChar}>6</button>
          <button onClick={addChar}>+</button>

          <button onClick={addChar}>1</button>
          <button onClick={addChar}>2</button>
          <button onClick={addChar}>3</button>
          <button onClick={addChar}>-</button>

          <button onClick={addChar}>.</button>
          <button onClick={addChar}>0</button>
          <button onClick={addChar}>/</button>
          <button onClick={addChar}>x</button>

          <button onClick={remove} className="reset">RESET</button>
          <button onClick={calculate} className="eqaul">=</button>
        </div>
      </div>
    </>
  )
}

export default App;
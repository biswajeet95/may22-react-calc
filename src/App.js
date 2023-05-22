import React, { useState } from 'react';
import './App.css';


function App() {
  const [result, setResult] = useState('')
  const cleardata = () => {
    setResult = '';
  }
  const displayvalue = (value) => {
    setResult((prevdata) => prevdata + value)
  }
  const equalvalue = () => {
    setResult((prevdata) => eval(prevdata));
  }

  return (
    <div className="App">
      <div className="title">CALCULATOR</div>
      <table>
        <tbody>
          <tr>
            <td colSpan="3"><input type="text" id="result" value={result} readOnly /></td>
            <td><input type="button" value="c" onClick={cleardata} readOnly /></td>
          </tr>
          <tr>
            <td><input type="button" value="1" onClick={() => displayvalue('1')} readOnly /></td>
            <td><input type="button" value="2" onClick={() => displayvalue('2')} readOnly /></td>
            <td><input type="button" value="3" onClick={() => displayvalue('3')} readOnly /></td>
            <td><input type="button" value="/" onClick={() => displayvalue('/')} readOnly /></td>
          </tr>
          <tr>
            <td><input type="button" value="4" onClick={() => displayvalue('4')} readOnly /></td>
            <td><input type="button" value="5" onClick={() => displayvalue('5')} readOnly /></td>
            <td><input type="button" value="6" onClick={() => displayvalue('6')} readOnly /></td>
            <td><input type="button" value="-" onClick={() => displayvalue('-')} readOnly /></td>
          </tr>
          <tr>
            <td><input type="button" value="7" onClick={() => displayvalue('7')} readOnly /></td>
            <td><input type="button" value="8" onClick={() => displayvalue('8')} readOnly /></td>
            <td><input type="button" value="9" onClick={() => displayvalue('9')} readOnly /></td>
            <td><input type="button" value="+" onClick={() => displayvalue('+')} readOnly /></td>
          </tr>
          <tr>
            <td><input type="button" value="." onClick={() => displayvalue('.')} readOnly /></td>
            <td><input type="button" value="0" onClick={() => displayvalue('0')} readOnly /></td>
            <td><input type="button" value="=" onClick={() => equalvalue('=')} readOnly /></td>
            <td><input type="button" value="*" onClick={() => displayvalue('*')} readOnly /></td>
          </tr>


        </tbody>

      </table>

    </div>
  );
}

export default App;


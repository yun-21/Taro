// src/App.tsx
import React, { useState } from 'react';
import styles from './styles'; // styles.ts 파일을 import

const App: React.FC = () => {
  const [state, setState] = useState({
    idValue: '',
    pwdValue: '',
    idValueServer: '',
    pwdValueServer: ''
  })
  const send = () => {
    const data = {
      idValue: state.idValue,
      pwdValue: state.pwdValue
    }
    fetch('http://localhost:3001/send',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    })
  }
  return (
    <div id="content">
      <div id="content-head">
        <div id="loginTitle"></div>
      </div>
      <div id="content-body">
        <div id="loginInput">
          <input type="text" value={state.idValue} onChange={state.idValue} id="idValue" placeholder='아이디를 적어주세요' />
          <input type="text" value={state.pwdValue} onChange={state.pwdValue} id="pwdValue" placeholder='비밀번호를 적어주세요' />
        </div>
      </div>
      <div id="content-foot"></div>
    </div>
  );
};

export default App;
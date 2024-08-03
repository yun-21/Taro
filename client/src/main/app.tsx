// src/App.tsx
import React, { useState } from 'react';
import styles from '../style/styles'; // styles.ts 파일을 import

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
    <div id="content" style={styles.content}>
      <div id="content-head" style={styles.contentHead}>
        <div id="loginTitle">로그인</div>
      </div>
      <div id="content-body">
        <div id="loginInput">
          <input type="text" value={state.idValue} onChange={(ele)=>setState((prevState)=>({...prevState, idValue:ele.target.value,}))} id="idValue" placeholder='아이디를 적어주세요' />
          <input type="text" value={state.pwdValue} onChange={(ele)=>setState((prevState)=>({...prevState, pwdValue:ele.target.value,}))} id="pwdValue" placeholder='비밀번호를 적어주세요' />
        </div>
        <div>
          <button onClick={send}>로그인</button>
        </div>
      </div>
      <div id="content-foot"></div>
    </div>
  );
};

export default App;

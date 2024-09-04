import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GameStartPage = () => {
  const [display, setDisplay] = useState<'none' | 'block'>('none');
  const [color, setColor] = useState<'blue' | 'red'>('blue');
  const mouseOver = () => {
    setDisplay('block');
    setColor('red');
  }
  const mouseOut = () => {
    setDisplay('none');
    setColor('blue');
  }
  return (
    <>
      <div>돌 빨리 넣기 게임</div>
      <div onMouseOver={mouseOver} onMouseOut={mouseOut} style={{color:`${color}`}}>게임설명</div>
      <div style={{display:`${display}`}}>gdgd</div>
      <Link to={'/game'}>
        <div>시작하기</div>
      </Link>
      <Link to={'/'}>
        <div>뒤로가기</div>
      </Link>
    </>
  )
}
export default GameStartPage

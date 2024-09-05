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
      <div style={{display:`${display}`}}>
        <p>10개의 돌을 주워서 바구니에 넣는 게임이다!</p>
        <p>단, 제한시간 6초!</p>
        <p>돌 하나 당 10점을 획득한다. 권투를 빌겠다.</p>
        <p>하수 (점수 30점 이하) : 운세가 오르지 않는다.</p>
        <p>중수 (점수 50점 이하) : 운세가 10% 오른다.</p>
        <p>고수 (점수 70점 이하) : 운세가 40% 오른다.</p>
        <p>초고수 (점수 80점 이상) : 운세가 100% 오른다.</p>
      </div>
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

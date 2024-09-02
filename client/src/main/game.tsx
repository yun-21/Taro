import React, { useState } from 'react';
import Stone from './stone_component';
import { gameStyles } from '../style/game_style';

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [stones, setStones] = useState(() => {
    const containerWidth = window.innerWidth * 0.7;
    const containerHeight = window.innerHeight;

    const stoneHeight = 40; // 돌의 높이
    const stoneWidth = 40; // 돌의 넓이
    return Array.from({ length: 10 }, (_, index) => ({
      key: index,
      top: containerHeight - stoneHeight - Math.random() * 30,
      left: containerWidth - stoneWidth - Math.random() * (containerWidth - stoneWidth),
    }));
  });
  // const [numberOfStones] = useState(10);
  const containerWidth = window.innerWidth * 0.7;
  const containerHeight = window.innerHeight;
  const basketWidth = 100; // 바구니의 넓이
  const basketHeight = 100; // 바구니의 높이

  const basketLeft = containerWidth - basketWidth;
  const basketTop = containerHeight - basketHeight;

  const basketStyle: React.CSSProperties = {
    ...gameStyles.basket,
    width: basketWidth,
    height: basketHeight,
  }
  const Drop = (index: number, newTop: number, newLeft: number) => {
    const updatedStones = [...stones];
    const stone = updatedStones[index];

    // 돌의 위치가 바구니와 겹치면 점수를 증가시킴
    if (
      newLeft >= basketLeft &&
      newLeft + 40 <= basketLeft + basketWidth &&
      newTop >= basketTop &&
      newTop + 40 <= basketTop + basketHeight
    ) {
      setScore(prevScore => prevScore + 10);
    }

    // 돌의 위치 업데이트
    stone.top = newTop;
    stone.left = newLeft;
    setStones(updatedStones);
  };

  // // 돌을 동적으로 생성
  // const stones = Array.from({ length: numberOfStones }, (_, index) => {
  //   const top = containerHeight - stoneHeight - Math.random() * 30; // 돌 랜덤 생성 높이
  //   const left = containerWidth - stoneWidth - Math.random() * (containerWidth - stoneWidth);
  //   const dropEnd = () => {
  //     // 돌의 위치가 바구니와 겹치면 점수를 증가시킴
  //     if (
  //       left >= containerWidth - basketWidth &&
  //       left + stoneWidth <= containerWidth &&
  //       top >= containerHeight - basketHeight &&
  //       top + stoneHeight <= containerHeight
  //     ) {
  //       setScore(prevScore => prevScore + 10);
  //     }
  //   }
  //   return <Stone key={index} top={top} left={left} onDrop={dropEnd}/>;
  // });
  return (
    <div style={gameStyles.allContent}>
      <div style={gameStyles.stoneContent}>
        {stones.map((stone, index) => (
          <Stone
            key={stone.key}
            top={stone.top}
            left={stone.left}
            onDrop={(newTop, newLeft) => Drop(index, newTop, newLeft)}
          />
        ))}
      </div>
      <div style={gameStyles.basketContent}>
        <div style={basketStyle}></div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
        점수: {score}
      </div>
    </div>
  );
  // return (
  //   <div style={gameStyles.allContent}>
  //     <div style={gameStyles.stoneContent}>
  //       {stones}
  //     </div>
  //     <div style={gameStyles.basketContent}>
  //       <div style={basketStyle}></div>
  //     </div>
  //     <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
  //       점수: {score}
  //     </div>
  //   </div>
  // );
};

export default Game;
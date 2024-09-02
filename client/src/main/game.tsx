import React, { useState } from 'react';
import Stone from './stone_component';
import { gameStyles } from '../style/game_style';

const Game: React.FC = () => {
  const [numberOfStones] = useState(10);
  const containerWidth = window.innerWidth * 0.7;
  const containerHeight = window.innerHeight;

  const stoneHeight = 40; // 돌의 높이
  const stoneWidth = 40;

  // 돌을 동적으로 생성
  const stones = Array.from({ length: numberOfStones }, (_, index) => {
    const top = containerHeight - stoneHeight - Math.random() * 30; // 돌 랜덤 생성 높이
    const left = containerWidth - stoneWidth - Math.random() * (containerWidth - stoneWidth);

    return <Stone key={index} top={top} left={left}/>;
  });
  return (
    <div style={gameStyles.allContent}>
      <div style={gameStyles.stoneContent}>
        {stones}
      </div>
      <div style={gameStyles.basketContent}>
        <div style={gameStyles}>바구니</div>
      </div>
    </div>
  );
};

export default Game;
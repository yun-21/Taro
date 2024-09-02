import React from 'react';
import { gameStyles } from '../style/game_style';

interface StoneProps {
  top: number;
  left: number;
}

const Stone: React.FC<StoneProps> = ({ top, left}) => {
  const stoneStyle: React.CSSProperties = {
    ...gameStyles.stone, // 기본 스타일을 가져오기
    top: `${top}px`,
    left: `${left}px`,
  };

  return <div style={stoneStyle}></div>;
};
export default Stone;
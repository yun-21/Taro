import React from 'react';
import { gameStyles } from '../style/game_style';

interface StoneProps {
  top: number;
  left: number;
  onDrop: (top: number, left: number) => void; // 새로운 위치를 전달하는 콜백 함수
}

const Stone: React.FC<StoneProps> = ({ top, left, onDrop}) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', 'stone'); // 드래그 시 데이터 설정
  };
  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 기본 드롭 동작 방지

    // 드롭된 위치를 계산
    const newTop = e.clientY - 20; // Y 좌표 (돌의 중심을 맞추기 위해 높이의 반을 빼줌)
    const newLeft = e.clientX - 20; // X 좌표 (돌의 중심을 맞추기 위해 너비의 반을 빼줌)

    // 드래그 중인 돌이 새로운 위치로 이동되도록 onDrop 콜백 호출
    onDrop(newTop, newLeft);
  };
  const stoneStyle: React.CSSProperties = {
    ...gameStyles.stone, // 기본 스타일을 가져오기
    top: `${top}px`,
    left: `${left}px`,
  };

  return(
    <div
      draggable
      onDragStart={dragStart}
      onDragOver={(e) => e.preventDefault()} // 드래그가 요소 위를 지나가도록 허용
      onDrop={drop}
      style={stoneStyle}></div>
  )
};
export default Stone;
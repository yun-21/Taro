import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { gameStyles } from '../style/game_style';
import DraggableItem from './stone_component';
import DndContext from './dbcontent';

interface DragStone {
  id: string;
  top: number;
  left: number;
}

const DropTarget: React.FC = () => {
  const containerWidth = window.innerWidth * 0.7;
  const containerHeight = window.innerHeight;
  const stoneHeight = 40; // 돌의 높이
  const stoneWidth = 40; // 돌의 넓이
  // const stoneNum = 10;
  const stones = Array.from({ length: 10 }, (_, index) => ({
        id: `stone${index}`,
        top: containerHeight - stoneHeight - Math.random() * 30,
        left: containerWidth - stoneWidth - Math.random() * (containerWidth - stoneWidth),
      }));
  const [stone, setStone] = useState(stones);
  const [score, setScore] = useState(0);
  const [{ isOver }, drop] = useDrop<DragStone, void, { isOver: boolean }>(() => ({
    accept: 'STONE',
    drop: (item) => {
      dropStone(item.id);
      setScore(getScore => getScore + 10);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      // canDrop: monitor.canDrop(),
    }),
  }));

  const dropStone = (id: string) => {
    setStone(stone => stone.filter(item => item.id !== id));
  }
  const basketStyle: React.CSSProperties = {
    ...gameStyles.basket,
    backgroundColor: isOver ? '#C5965E' : '#996600'
  }

  return (
    <>
      <DndContext>
        {stone.map(item => (
          <DraggableItem key={item.id} id={item.id} top={item.top} left={item.left} />
        ))}
      </DndContext>
      <div ref={drop} style={basketStyle}>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
      점수: {score}
    </div>
    </>
  );
};

export default DropTarget;

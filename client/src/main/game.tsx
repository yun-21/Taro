// import React, { useState } from 'react';
// import Stone from './stone_component';
// import { gameStyles } from '../style/game_style';

// const Game: React.FC = () => {
//   const [score, setScore] = useState(0);
//   const [numberOfStones] = useState(10);
//   // 돌을 동적으로 생성
//   const stones = Array.from({ length: numberOfStones }, (_, index) => {
//     return <Stone key={index}/>;
//   });
//   return (
//     <div style={gameStyles.allContent}>
//       <div style={gameStyles.stoneContent}>
//         {stones}
//       </div>
//       <div style={gameStyles.basketContent}>
//         <div style={gameStyles.basket}></div>
//       </div>
//       <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
//         점수: {score}
//       </div>
//     </div>
//   );
// };

// export default Game;

// import { useDrop } from 'react-dnd';

// interface DragItem {
//   id: string;
// }

// const DropTarget: React.FC<{ onDrop: (id: string) => void }> = ({ onDrop }) => {
//   const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>(() => ({
//     accept: 'ITEM',
//     drop: (item) => {
//       if (item) {
//         onDrop(item.id);
//       }
//     },
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   }));

//   return (
//     <div ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'lightgray' }}>
//       Drop here
//     </div>
//   );
// };

// export default DropTarget;

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
  }));

  const dropStone = (id: string) => {
    setStone(stone => stone.filter(item => item.id !== id));
  }

  // const stoneRandom = () => {
  //   const top = containerHeight - stoneHeight - Math.random() * 30;
  //   const left = containerWidth - stoneWidth - Math.random() * (containerWidth - stoneWidth);
  //   return {top, left}
  // }
  const basketStyle: React.CSSProperties = {
    ...gameStyles.basket,
    backgroundColor: isOver ? 'lightgreen' : 'lightgray'
  }

  return (
    <>
      <DndContext>
        <div>
          {stone.map(item => (
            // const {top, left} = stoneRandom();
            <DraggableItem key={item.id} id={item.id} top={item.top} left={item.left} />
            ))}
        </div>
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

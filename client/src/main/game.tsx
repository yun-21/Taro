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

import React from 'react';
import { useDrop } from 'react-dnd';
import { gameStyles } from '../style/game_style';

interface DragStone {
  id: string;
}

const DropTarget: React.FC<{onDrop: (id: string) => void}> = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop<DragStone, void, { isOver: boolean }>(() => ({
    accept: 'STONE',
    drop: (item) => {
      onDrop(item.id);
    },
  }));
  
  const basketStyle: React.CSSProperties = {
    ...gameStyles.basket,
    backgroundColor: isOver ? 'lightgreen' : 'lightgray'
  }

  return (
    <div ref={drop} style={basketStyle}>
    </div>
  );
};

export default DropTarget;

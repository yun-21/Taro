// import React from 'react';
// import { gameStyles } from '../style/game_style';

// const Stone: React.FC = ({}) => {

//   const stoneStyle: React.CSSProperties = {
//     ...gameStyles.stone, // 기본 스타일을 가져오기
//     top: `${top}px`,
//     left: `${left}px`,
//   };

//   return(
//     <div
//       style={stoneStyle}></div>
//   )
// };
// export default Stone;


// import React from 'react';
// import { useDrag } from 'react-dnd';

// interface DragItem {
//   id: string;
//   text: string;
// }

// const DraggableItem: React.FC<{ id: string; text: string }> = ({ id, text }) => {
//   const [{ isDragging }, drag] = useDrag<DragItem, void, { isDragging: boolean }>(() => ({
//     type: 'ITEM',
//     item: { id, text },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
//       {text}
//     </div>
//   );
// };

// export default DraggableItem;
import React from 'react';
import { useDrag } from 'react-dnd';
import { gameStyles } from '../style/game_style';

interface DragStone {
  id: string;
}

const DraggableItem: React.FC<{id:string, top: number, left: number}> = ({ id , top, left}) => {
  const [{ isDragging }, drag] = useDrag<DragStone, void, { isDragging: boolean }>(() => ({
    type: 'STONE',
    item: { id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  }));
  const stoneStyle: React.CSSProperties = {
    ...gameStyles.stone,
    opacity: isDragging ? 0 : 1,
    top: top,
    left: left,
    height:'30px',
    width:'40px',
    zIndex: isDragging ? 1000 : 'auto'
  };

  return (
    <div ref={drag} style={stoneStyle}></div>
  );
};

export default DraggableItem;

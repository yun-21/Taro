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

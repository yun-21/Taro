// import React from 'react';
// import DraggableItem from './stone_component';
// import DropTarget from './game';
// import DndContext from './dbcontent';

// const GameRender = () => {
//   const handleDrop = (id: string) => {
//     alert(`점수를 얻었습니다! 아이템 ID: ${id}`);
//   };

//   return (
//     <DndContext>
//         <DraggableItem id="stone1" text="돌멩이 1" />
//         <DraggableItem id="stone2" text="돌멩이 2" />
//         <DropTarget onDrop={handleDrop} />
//     </DndContext>
//   );
// };

// export default GameRender;

import React, { useState } from 'react';
import DraggableItem from './stone_component';
import DropTarget from './game';
import DndContext from './dbcontent';

const App = () => {
  const stoneNum = 10;
  const stones = Array.from({ length: stoneNum }, (_, index) => {
        return { id: `stone${index}`};
      });
  const [items, setItems] = useState(stones);

  const dropStone = (id: string) => {
    // 아이템 드롭 시, 해당 아이템을 리스트에서 제거
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    console.log('점수 겟')
    // alert(`점수를 얻었습니다! 아이템 ID: ${id}`);
  };

  return (
    <DndContext>
      <div>
        {items.map(item => (
          <DraggableItem key={item.id} id={item.id} />
        ))}
        <DropTarget onDrop={dropStone} />
      </div>
    </DndContext>
  );
};

export default App;

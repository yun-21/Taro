import React from 'react';
import DropTarget from './game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App:React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DropTarget/>
    </DndProvider>
  );
};

export default App;

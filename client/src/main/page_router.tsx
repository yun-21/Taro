import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaroMain from './taromain';
import GameStart from './gameStart';
import Game from './score';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaroMain />} />
        <Route path="/gameStart" element={<GameStart />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
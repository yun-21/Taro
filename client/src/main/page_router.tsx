import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaroMain from './taromain';
import Game from './game';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaroMain />} />
        {/* <Route path="/game" element={<Game />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
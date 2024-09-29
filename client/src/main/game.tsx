import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { gameStyles } from '../style/game_style';
import DraggableItem from './stone_component';
import { Link } from 'react-router-dom';
import { gameEndStyles } from '../style/game_end_style';

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
  const [gameActive, setGameActive] = useState(true);

  const [animalSelect, setanimalSelect] = useState<string>('option1');
  const [selectResult, setSelectResult] = useState('');
  
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameActive(false);
    }, 9000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const lunckBtn = () => {
    if (animalSelect === 'animal2') {
      setScore(50);
      setSelectResult('운세 10% 증가!');
    } else {
      setSelectResult('안타깝네.. 더이상의 기회는 없어 돌아가');
    }
  }

  const scoreMsg = () => {
    if (score <= 30) {
      return (
      <>
      {selectResult==='' ?
      <>
        <div>...하수에겐 할 말이 없지만 뭐 당신이 원해서 하수가 된 것은 아니니까.. 다른 기회를 줄까?</div>
        <div>관리자가 제일 좋아하는 동물은?(맞춰봐.. 혹시 알아? 좋은 일이 발생할지..)</div>
        <label><input type='radio' value="animal1" onChange={(e) => setanimalSelect(e.target.value)} checked={animalSelect === 'animal1'}/>고양이</label>
        <label><input type='radio' value="animal2" onChange={(e) => setanimalSelect(e.target.value)} checked={animalSelect === 'animal2'}/>강아지</label>
        <label><input type='radio' value="animal4" onChange={(e) => setanimalSelect(e.target.value)} checked={animalSelect === 'animal4'}/>사막여우</label>
        <button onClick={lunckBtn} disabled={!animalSelect} style={gameEndStyles.quizBtn}>제출하기</button>
        </>
      :
        <h2>{selectResult}</h2>
      }
        </>)
    } else if (score <= 50) {
      if (selectResult === '') {
        return '오? 조금만 더 했더라면~ 고수가 될 수도 있었는데 말이지.. 그래도 운세를 10%정도 올려주도록 하지..';
      } else {
        return `점수 50점으로 상향! ${selectResult}`;
      }
    } else {
      return '당신... 고수잖아? 대단해.. 운세를 40%나 올려주도록 하지..';
    }
  };
  return (
    <>
      {gameActive ?
        <>
          <div>
            {stone.map(item => (
              <DraggableItem key={item.id} id={item.id} top={item.top} left={item.left} />
            ))}
          </div>
          <div ref={drop} style={basketStyle}></div>
        
          <div style={gameEndStyles.inGameScore}>점수: {score}</div>
        </>
        :
        <div style={{height:'100vh'}}>
          <div style={gameEndStyles.gameEndTitle}>게임종료</div>
          <div style={gameEndStyles.gameEndContent}>
            <div style={gameEndStyles.gameEndScore}>당신의 점수는 <b>{score}점</b></div>
            <div style={gameEndStyles.gameEndScoreMsg}>{scoreMsg()}</div>
            <div style={gameEndStyles.gameEndLinks}>
              <Link to={`/?score=${score}`} style={{textDecoration:"none", color:'blue'}}>
                <p>운세 보러가기</p>
              </Link>
              <Link to='/gameStart' style={{textDecoration:"none", color:'red'}}>
                <p>게임 다시하기</p>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default DropTarget;

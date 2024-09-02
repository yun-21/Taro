import React, { useState } from 'react';
import Modal from './modal';
import styles from '../style/styles';
import { Link } from 'react-router-dom';

const TaroMain: React.FC = () => {
    const [score, setScore] = useState(0);
    const [modalState, setModalState] = useState(false);
    const setModal = () => {
        setModalState(true);
    }
    const initModal = () => {
        setModalState(false);
    }
    const scoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScore(Number(event.target.value));
    };

return (
    <div>
        <h1 style={styles.title}>
            오늘의 운세
        </h1>
        <div style={styles.allCard}>
            <div onClick={setModal}>
                <div style={styles.oneCard}>1</div>
            </div>
            <div onClick={setModal}>
                <div style={styles.twoCard}>2</div>
            </div>
            <div onClick={setModal}>
                <div style={styles.threeCard}>3</div>
            </div>
            <div>
            </div>
            <div>
                <Link to="/game">
                    운세 올리기
                </Link>
            </div>
            <div style={styles.imsiStyle}>
                <div>
                    현재 게임이 안되는 관계로 밑에다가 숫자 80미만 혹은 80이상을 적으시면 운세가 달라집니다.
                </div>
                <div>
                    <input type="text" value={score} onChange={scoreChange} placeholder='게임이안됨 점수작성해주세요(1~100까지)'/>
                </div>
            </div>
            <Modal modalState={modalState} onClose={initModal} score={score}/>
        </div>
    </div>

)
};
export default TaroMain;
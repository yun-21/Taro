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
                <Link to="/gameStart">
                    운세 올리기 게임
                </Link>
            </div>
            <Modal modalState={modalState} onClose={initModal} score={score}/>
        </div>
    </div>

)
};
export default TaroMain;
import React, { useState } from 'react';
import Modal from './modal';
import styles from '../style/styles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const TaroMain: React.FC = () => {
    const location = useLocation();
    const [modalState, setModalState] = useState(false);
    const queryParams = new URLSearchParams(location.search);
    const score = Number(queryParams.get('score'));
    const [selectedCard, setSelectedCard] = useState<string>(''); // 클릭한 카드 저장

    const setModal = (cardType: string) => {
        setSelectedCard(cardType);
        setModalState(true);
    }
    const initModal = () => {
        setModalState(false);
    }
    
return (
    <div style={styles.mainAllContent}>
        <h1 style={styles.title}>
            오늘의 운세
        </h1>
        <div style={styles.allCard}>
            <div onClick={()=> setModal('oneCard')}>
                <div style={styles.oneCard}>1</div>
            </div>
            <div onClick={()=> setModal('twoCard')}>
                <div style={styles.twoCard}>2</div>
            </div>
            <div onClick={()=> setModal('threeCard')}>
                <div style={styles.threeCard}>3</div>
            </div>
        </div>
        <Modal modalState={modalState} onClose={initModal} score={score} selectedCard={selectedCard} />
        <div style={styles.footer}>
            <Link to="/gameStart" style={styles.linkStyle}>
                운세 올리기 게임
            </Link>
        </div>
    </div>

)
};
export default TaroMain;
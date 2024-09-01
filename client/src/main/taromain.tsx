import React, { useState } from 'react';
import Modal from './modal';
import styles from '../style/styles';

const TaroMain: React.FC = () => {
    const [modalState, setModalState] = useState(false);
    const setModal = () => {
        setModalState(true);
    }
    const initModal = () => {
        setModalState(false);
    }

return (
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
        <Modal modalState={modalState} onClose={initModal} />
    </div>

)
};
export default TaroMain;
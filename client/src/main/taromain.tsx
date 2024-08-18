import React, { useState } from 'react';
//DTO(카드 내용)
const TaroMain: React.FC = () => {
    const [state, setState] = useState('');
    const [modalState, setModalState] = useState(false);
    const setModal = () => {
        setModalState(true);
    }
    const initModal = () => {
        setModalState(false);
    }

    const check = () => {

    }
return (
    <div>
        <div onClick={setModal}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </div>

)
};
export default TaroMain;
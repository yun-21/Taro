import modalStyles from "../style/modal_style";
import React, { useState } from 'react';
import { allCard } from "./literal";

type ModalProps = {
  modalState: boolean;
  onClose: () => void;
  score: number;
  selectedCard: string; // 선택한 카드 타입 전달
};

// Modal 컴포넌트 정의
const Modal: React.FC<ModalProps> = ({ modalState, onClose, score, selectedCard }) => {
  const [behavior, setBehavior] = useState('');
  if (!modalState) {
    return null; // show가 false일 때는 아무것도 렌더링하지 않음
  }

  function randomTaro() {
    // 점수에 따른 랜덤 운세 말
    if(score <= 30) {
      const succes = allCard[30];
      const selectedArray = succes[selectedCard as keyof typeof succes];
      const randomIndex = Math.floor(Math.random() * selectedArray.length);
      return selectedArray[randomIndex];
    } else if (score <= 50) {
      const succes = allCard[50];
      const selectedArray = succes[selectedCard as keyof typeof succes];
      const randomIndex = Math.floor(Math.random() * selectedArray.length);
      return selectedArray[randomIndex];
    } else {
      const succes = allCard[100];
      const selectedArray = succes[selectedCard as keyof typeof succes];
      const randomIndex = Math.floor(Math.random() * selectedArray.length);
      return selectedArray[randomIndex];
    }
  //   return fetch("http://localhost:3001/behavior", {
  //     method: 'POST'
  //   })
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     setBehavior(data);
  //   })
  //   .catch((err) => console.log(err))
  }

  return (
    <div style={modalStyles.modalStyle}>
      <div style={modalStyles.modalContentStyle}>
        <p>{randomTaro()}</p>
        <button onClick={onClose}>나가기</button>
      </div>
    </div>
  );
};

export default Modal;
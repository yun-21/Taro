import modalStyles from "../style/modal_style";
import React from 'react';
import { allCard } from "./literal";

type ModalProps = {
  modalState: boolean;
  onClose: () => void;
  score: number;
  selectedCard: string; // 선택한 카드 타입 전달
};

// Modal 컴포넌트 정의
const Modal: React.FC<ModalProps> = ({ modalState, onClose, score, selectedCard }) => {
  if (!modalState) {
    return null; // show가 false일 때는 아무것도 렌더링하지 않음
  }

  function randomTaro(): string {
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
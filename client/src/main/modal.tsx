import modalStyles from "../style/modal_style";
import React from 'react';

type ModalProps = {
  modalState: boolean;
  onClose: () => void;
};

// Modal 컴포넌트 정의
const Modal: React.FC<ModalProps> = ({ modalState, onClose }) => {
  if (!modalState) {
    return null; // show가 false일 때는 아무것도 렌더링하지 않음
  }

  function randomTaro(): string {
    const result = ["오늘은 먹을 복이 있으신 것 깉습니다.", "빨간색 구두가 행운을 불러올 것 같습니다.", "모자가 오늘의 행운의 아이템입니다.", "달을 보면 좋은 일이.."];
    const randomIndex = Math.floor(Math.random() * result.length);
    return result[randomIndex];
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
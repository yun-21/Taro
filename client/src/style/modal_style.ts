import React from 'react';

// 스타일 객체 정의
const modalStyles: { [key: string]: React.CSSProperties } = {
  modalStyle: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentStyle: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    width: '60%',
    height: '60%',
    padding: '10px',
    borderRadius: '10px',
  },
};

export default modalStyles;
import React from 'react';
export const gameStyles: {[key:string]:React.CSSProperties} = {
  stoneContent: {
    position: 'relative',
    width: '70vw',
    height: '100vh',
    overflow: 'hidden',
  },
  stone: {
    position: 'absolute',
    width: '60px', // 타원의 너비
    height: '40px', // 타원의 높이
    backgroundColor: 'gray',
    borderRadius: '50%', // 타원형을 만들기 위해 설정
  },
  allContent: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw',
  },
  basketContent: {
    width: '30vw',
    height:'100vh',
  },
  basket: {
    bottom: '0', // 바닥에 붙이기
    width: '10vw', // 바구니의 너비를 컨테이너에 맞게 설정
    height: '30vh', // 바구니의 높이
    backgroundColor: '#C5965E', 
    boxSizing: 'border-box', // 패딩을 포함한 너비와 높이 계산
    display: 'flex',
    alignItems: 'center', // 수직 중앙 정렬
    justifyContent: 'center', // 수평 중앙 정렬
  }
}
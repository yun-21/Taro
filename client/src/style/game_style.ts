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
    backgroundColor: 'gray',
    borderRadius: '60%', // 타원형을 만들기 위해 설정
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
    position: 'absolute',
    bottom: '0', // 바닥에 붙이기
    right: '0', // 오른쪽에 붙이기
    clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)', // 아랫변이 길고 윗변이 짧은 사다리꼴 모양
    height:'80px',
    width:'100px'
  }
}
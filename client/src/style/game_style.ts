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
  },
  gameMainAll: {
    display: 'flex',
    flexDirection:'column',
    height:'100vh',
    width:'100vw',
  },
  gameTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    height:'10%',
  },
  gameLinkCollection: {
    display:'flex',
    height:'90%',
    width:'100vw',
    justifyContent:'flex-around',
    alignItems:'center'
  },
  gameDescriptionAll : {
    display:'flex',
    flexDirection:'column',
    height:'20%',
    width:'50%',
    alignItems:'center',
  },
  gameDescription: {
    fontSize:'32px',
    height:'100%',
    fontWeight: 'bold',
    marginTop:'40px',
  },
  gameBtnCollection: {
    display: 'flex',
    height:'20%',
    flexDirection: 'column',
    width:'50%',
    alignItems:'center',
  },
  gameStart: {
    fontSize: '28px',
    height:'50%',
    marginTop:'40px',
    textDecoration:'none',
    color : 'blue'
  },
  gameBack: {
    fontSize: '28px',
    height:'50%',
    marginTop:'40px',
    textDecoration:'none',
    color : 'red'
  },
}
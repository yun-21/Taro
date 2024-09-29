import React from 'react';
export const gameEndStyles: {[key:string]:React.CSSProperties} = {
  gameEndTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    height: '10%'
  },
  gameEndContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameEndScore: {
    display: 'flex',
    height: '10%',
    alignItems: 'center',
    fontSize: '30px'
  },
  gameEndScoreMsg: {
    height: '40%',
    fontSize: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  gameEndLinks: {
    display: 'flex',
    height: '10%',
    gap: '30px',
    fontSize: '25px',
    alignItems: 'center',
  },
  quizBtn: {
    fontSize: '15px',
    borderColor: 'lightcoral',
    backgroundColor: 'lightcoral',
  },
  inGameScore: {
    position: 'absolute',
    top: '2%',
    left: "50%",
    padding: '10px',
    fontSize:'30px',
    fontWeight:'bold'
  }
}
import React from 'react';
const styles: {[key:string]:React.CSSProperties} = {
  title : {
    textAlign: 'center'
  },
  content : {
    display:"flex",
    flexDirection:"column",
    height:"100vh",
    width:"100vw",
  },
  contentHead:{
    textAlign: "center",
    // display:"flex"
  },
  allCard : {
    display: 'flex',
    marginLeft:'20px',
    height: '100vh',
    width: '100vw',
    alignItems:'center',
    justifyContent:'center',
    gap:'30px'
  },
  oneCard : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '10vw',
    height: '20vw',
    backgroundColor: 'lightpink'
  },
  twoCard : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '10vw',
    height: '20vw',
    backgroundColor: 'lightblue'
  },
  threeCard : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '10vw',
    height: '20vw',
    backgroundColor: 'lightgreen'
  },
  imsiStyle : {
    display:'flex',
    flexDirection:'column'
  }
};

export default styles
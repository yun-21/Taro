import React from 'react';
const styles: {[key:string]:React.CSSProperties} = {
  mainAllContent : {
    display:'flex',
    flexDirection:'column',
    height: '100vh',
    width: '100vw',
    // backgroundColor: 'black',
  },
  title : {
    textAlign: 'center',
    height: '10%',
  },
  //id (app)
  content : {
    display:"flex",
    flexDirection:"column",
    height:"100vh",
    width:"100vw",
  },
  //id (app)
  contentHead:{
    textAlign: "center",
    // display:"flex"
  },
  allCard : {
    height: '80%',
    display: 'flex',
    marginLeft:'20px',
    // height: '100vh',
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
  footer : {
    height:'10%',
    
  }
};

export default styles
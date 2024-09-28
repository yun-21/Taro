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
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
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
    display: 'flex',
    height: '80%',
    // marginLeft:'20px',
    // height: '100vh',
    width: '100vw',
    alignItems:'center',
    justifyContent:'center',
    gap:'30px',
    backgroundColor:'#a60202'
  },
  oneCard : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '10vw',
    height: '20vw',
    backgroundColor: 'lightpink',
    transform: 'rotate(20deg)',
    borderRadius: '20px',
    marginLeft: '-140px',
    marginRight: '100px'
  },
  twoCard : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '10vw',
    height: '20vw',
    backgroundColor: 'lightblue',
    borderRadius: '20px',
    marginBottom: '-80px'
  },
  threeCard : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '10vw',
    height: '20vw',
    backgroundColor: 'lightgreen',
    transform: 'rotate(-20deg)',
    borderRadius: '20px',
    marginRight: '-250px',
    marginLeft: '100px',
  },
  footer : {
    display:'flex',
    justifyContent:'end',
    height:'10%',
  },
  linkStyle : {
    marginTop:'40px',
    textDecoration:'none',
    fontSize:'22px',
    fontWeight: 'bold',
  }
};

export default styles
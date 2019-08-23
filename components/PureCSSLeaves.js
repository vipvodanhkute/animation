import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper=styled.div`
    position:relative;
    margin:0;
    padding:0;
    overflow:hidden;
    width:100%;
    height:500px;
    section{
      width:100%;
      height:100%;
      background:radial-gradient(#333,#000);
      &.set{ 
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        div{
          position:absolute;
          display:block;
          img{
            width:100px;
            height:75px;
          }
        }
        div:nth-child(1){
          left:20%;
          animation:pureCSSLeaves 15s linear infinite;
          animation-delay: -7s;
        }
        div:nth-child(2){
          left:50%;
          animation:pureCSSLeaves 10s linear infinite;
          animation-delay: -5s;
        }
        div:nth-child(3){
          left:70%;
          animation:pureCSSLeaves 20s linear infinite;
        }
        div:nth-child(4){
          left:0%;
          animation:pureCSSLeaves 25s linear infinite;
          animation-delay: -5s;
        }
        div:nth-child(5){
          left:85%;
          animation:pureCSSLeaves 30s linear infinite;
        }
        div:nth-child(6){
          left:0%;
          animation:pureCSSLeaves 35s linear infinite;
        }
        div:nth-child(7){
          left:15%;
          animation:pureCSSLeaves 40s linear infinite;
          animation-delay: -7s;
        }
        div:nth-child(8){
          left:60%;
          animation:pureCSSLeaves 45s linear infinite;
        }
      }
      &.set2{
        transform:scale(2) rotateY(180deg);
        filter:blur(2px);
      }
      // &.set3{
      //   transform:scale(0.8) rotateX(180deg);
      //   filter:blur(4px);
      // }
    }
    @keyframes pureCSSLeaves{
      0%{
        top:-10%;
        opacity:0;
        transform:translateX(20px) rotate(0deg);
      }
      10%{
        opacity:1;
      }
      20%{
        transform:translateX(-20px) rotate(45deg);
      }
      20%{
        transform:translateX(-20px) rotate(90deg);
      }
      60%{
        transform:translateX(20px) rotate(135deg);
      }
      80%{
        transform:translateX(-20px) rotate(180deg);
      }
      100%{
        top:110%;
        transform:translateX(-20px) rotate(225deg);
      }
    }
`
class PureCSSLeaves extends Component {
    render() {
        return (
            <Wapper>
            <section className="set">
              <div><img src="static/image/Aatrox.jpg" alt="img1"/></div>     
              <div><img src="static/image/Caitlyn.jpg" alt="img2"/></div>     
              <div><img src="static/image/Diana.jpg" alt="img3"/></div>     
              <div><img src="static/image/Ezreal.jpg" alt="img4"/></div>    
              <div><img src="static/image/Aatrox.jpg" alt="img1"/></div>     
              <div><img src="static/image/Caitlyn.jpg" alt="img2"/></div>     
              <div><img src="static/image/Diana.jpg" alt="img3"/></div>     
              <div><img src="static/image/Ezreal.jpg" alt="img4"/></div>                    
            </section>
            <section className="set set2">
              <div><img src="static/image/Aatrox.jpg" alt="img1"/></div>     
              <div><img src="static/image/Caitlyn.jpg" alt="img2"/></div>     
              <div><img src="static/image/Diana.jpg" alt="img3"/></div>     
              <div><img src="static/image/Ezreal.jpg" alt="img4"/></div>    
              <div><img src="static/image/Aatrox.jpg" alt="img1"/></div>     
              <div><img src="static/image/Caitlyn.jpg" alt="img2"/></div>     
              <div><img src="static/image/Diana.jpg" alt="img3"/></div>     
              <div><img src="static/image/Ezreal.jpg" alt="img4"/></div>                    
            </section>
            <section className="set set3">
              <div><img src="static/image/Aatrox.jpg" alt="img1"/></div>     
              <div><img src="static/image/Caitlyn.jpg" alt="img2"/></div>     
              <div><img src="static/image/Diana.jpg" alt="img3"/></div>     
              <div><img src="static/image/Ezreal.jpg" alt="img4"/></div>    
              <div><img src="static/image/Aatrox.jpg" alt="img1"/></div>     
              <div><img src="static/image/Caitlyn.jpg" alt="img2"/></div>     
              <div><img src="static/image/Diana.jpg" alt="img3"/></div>     
              <div><img src="static/image/Ezreal.jpg" alt="img4"/></div>                    
            </section>
          </Wapper>
        );
    }
}

export default PureCSSLeaves;
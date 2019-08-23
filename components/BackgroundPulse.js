import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper=styled.div`
    position:relative;
    width:100%;
    height:500px;
    section{
      position:absolute;
      width:100%;
      height:100vh;
      background:#000;
      overfolow:hidden; 
      animation:bgColor 20s linear infinite;
      &.bgPulse{
        width:100%;
        height:100%;
        span{
          position:absolute;
          width:80px;
          height:80px;
          background:#fff;
        }
        span:nth-child(3n+1){
          background:transparent;
          border:5px solid #fff;
        }
        span:nth-child(1){
          {
            top:50%;
            left:20%;
            animation:backgroundPulse 10s linear infinite;
          }
        }
        span:nth-child(2){
          {
            top:80%;
            left:40%;
            animation:backgroundPulse 12s linear infinite;
          }
        }
        span:nth-child(3){
          {
            top:10%;
            left:65%;
            animation:backgroundPulse 15s linear infinite;
          }
        }
        span:nth-child(4){
          {
            top:50%;
            left:70%;
            animation:backgroundPulse 6s linear infinite;
          }
        }
        span:nth-child(5){
          {
            top:100%;
            left:30%;
            animation:backgroundPulse 9s linear infinite;
          }
        }
        span:nth-child(6){
          {
            top:90%;
            left:95%;
            animation:backgroundPulse 8s linear infinite;
          }
        }
        span:nth-child(7){
          {
            top:80%;
            left:5%;
            animation:backgroundPulse 5s linear infinite;
          }
        }
        span:nth-child(8){
          {
            top:35%;
            left:50%;
            animation:backgroundPulse 14s linear infinite;
          }
        }
        span:nth-child(9){
          {
            top:5%;
            left:5%;
            animation:backgroundPulse 10s linear infinite;
          }
        }
        span:nth-child(10){
          {
            top:25%;
            left:90%;
            animation:backgroundPulse 11s linear infinite;
          }
        }
      }
    }
    @keyframes backgroundPulse{
      0%{
        transform:scale(0) translateY(0) rotate(0deg);
        opacity:1;
      }
      100%{
        transform:scale(1) transalteY(-100px) rotate(360deg);
        opacity:0;    
      }
    }
    @keyframes bgColor{
      0%{
        background:#F44336;
      }
      25%{
        background:03A9F4;
      }
      50%{
        background:#9C27B0;
      }
      75%{
        background:#00ff0a;
      }
      100%{
        background:#F44336;
      }

    }
`
class BackgroundPulse extends Component {
    render() {
        return (
            <Wapper>
                  <section className="bgPulse">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </section>
                </Wapper>
        );
    }
}

export default BackgroundPulse;
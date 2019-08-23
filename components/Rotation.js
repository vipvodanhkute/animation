import React, { Component } from 'react';
import styled from 'styled-components';

const Wapper = styled.div`
    margin:0;
    padding:0;
    width:100%;
    height:500px;
    position:relative;
    background-color:#607d8b;
    .box{
    position:absolute;
    top:calc(50% - 150px);
    left:calc(50% - 100px);
    transform:perspective(1000px) rotateY(-45deg);
    width:200px;
    height:300px;
    transform-style: preserve-3d; 
    
    &:before{
      content:'';
      position:absolute;
      bottom:-100px;
      width:100%;
      height:50px;
      background:#000;
      filter:blur(40px);
      opacity:0.5;  
    }
    div{
      top:0;
      position: absolute;
      left:0;
      width:100%;
      height:100%;
      transform-style: preserve-3d;
      animation:rotation 5s linear infinite;
      span{
        position:absolute;
        top:0;
        left:0;
        display:block;
        width:100%;
        height:100%;
        background:linear-gradient(0deg,#f1f1f1,#bbb,#f1f1f1);
        border-radius:20px;
      }
      span:nth-child(1){
        transform:rotateX(0deg);
      }
      span:nth-child(2){
        transform:rotateX(45deg);
      }
      span:nth-child(3){
        transform:rotateX(-45deg);
      }
      span:nth-child(4){
        transform:rotateX(90deg);
      }
    } 
    }
    @keyframes rotation{
      0%{
        transform:perspective(1000px) rotateX(0deg);
      }
      100%{
        transform:perspective(1000px) rotateX(359deg);
      }
    }
`

class Rotation extends Component {
    render() {
        return (
            <Wapper>
                    <div className="box">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                </Wapper>
        );
    }
}

export default Rotation;
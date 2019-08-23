import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper=styled.section`
 background:#262626;
 position:relative;
 height:300px;;
 ul{
     position:absolute;
     top:50%;
     left:50%;
     transform:translate(-50%,-50%);
     margin:0;
     padding:0;
     display:flex;
     li{
         list-style:none;
         font-family:verdana;
         font-size:5em;
         letter-spacing:15px;
         color:#484848;
         text-shadow:none;
         animation:animate 1s infinite linear; 
     }
     li:nth-child(1){
         animation-delay:0.2s;
     }
     li:nth-child(2){
        animation-delay:0.4s;
    }
    li:nth-child(3){
        animation-delay:0.6s;
    }
    li:nth-child(4){
        animation-delay:0.8s;
    }
    li:nth-child(5){
        animation-delay:1s;
    }
    li:nth-child(6){
        animation-delay:1.2s;
    }
    li:nth-child(7){
        animation-delay:1.4s;
    }
    li:nth-child(8){
        animation-delay:1.6s;
    }
    li:nth-child(9){
        animation-delay:1.8s;
    }
 }
 @keyframes animate{
     0%{
         color:#a7a300;
         text-shadow:nonel
     }
     18%{
         color:#a7a300;
         text-shadow:none;
     }
     20%{
        color:#fff900;
        text-shadow:0 0 7px #fff000, 0 0 20px #ff6c00;
    }
    30%{
        color:#a7a300;
         text-shadow:none;
    }
    35%{
        color:#fff900;
        text-shadow:0 0 7px #fff000, 0 0 20px #ff6c00;
    }
    70%{
        color:#a7a300;
         text-shadow:none;
    }
    85%{
        color:#fff900;
        text-shadow:0 0 7px #fff000, 0 0 20px #ff6c00;
    }
    90%,100%{
        color:#a7a300;
         text-shadow:none;
    }

 }
`
class TextEffect extends Component {
    render() {
        return (
            <Wapper>
                <ul>
                    <li>H</li>
                    <li>A</li>
                    <li>P</li>
                    <li>P</li>
                    <li>Y</li>
                    <li>0</li>
                    <li>E</li>
                    <li>I</li>
                    <li>D</li>
                </ul>
            </Wapper>
        );
    }
}

export default TextEffect;
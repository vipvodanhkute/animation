import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper = styled.section`
    position:relative;
    background:#262626;
    height:300px;
    font-family:verdana;
    ul{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) skew(-25deg);
        display:flex;
        margin:0;
        padding:0;
        border:4px solid #ff0;
        box-shadow:0px 20px 10px rgba(0,0,0,.2);
        li{
             position:relative;
             list-style:none;
             width:80px;
             height:80px;
             background:#ff0;
             font-size:3em;
             color:rgba(0,0,0,.1);
             text-algin:center;
             line-height:80px;
             box-sizing:border-box;
             overflow:hidden;
             margin:0 -1px;
             &:before{
                content:attr(data-title);
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                color:#262626;
                animation:loading 2s linear infinite; 
             }
        }
        li:nth-child(1){
            &:before{
                animation-delay:0s;
            }
        }
        li:nth-child(2){
            &:before{
                animation-delay:0.1s;
            }
        }
        li:nth-child(3){
            &:before{
                animation-delay:0.2s;
            }
        }
        li:nth-child(4){
            &:before{
                animation-delay:0.3s;
            }
        }
        li:nth-child(5){
            &:before{
                animation-delay:0.4s;
            }
        }
        li:nth-child(6){
            &:before{
                animation-delay:0.5s;
            }
        }
        li:nth-child(7){
            &:before{
                animation-delay:0.6s;
            }
        }
    }
    @keyframes loading{
        0%{
            top:-100%;
        }
        20%{
            top:0%;
            background:transparent;
            color:#262626;
        }
        40%{
            top:0%;
            background:#262626;
            color:#ff0;
        }
        60%{
            top:0%;
            background:transparent;
            color:#262626;
        }
        80%{
            top:-20%;
            background:transparent;
            color:#262626;
        }
        100%{
            top:100%; 
        }
    }

`
class Loading extends Component {
    render() {
        return (
            <Wapper>
                <ul>
                    <li data-title="L">L</li>
                    <li data-title="O">O</li>
                    <li data-title="A">A</li>
                    <li data-title="D">D</li>
                    <li data-title="I">I</li>
                    <li data-title="N">N</li>
                    <li data-title="G">G</li>
                </ul>
            </Wapper>
        );
    }
}

export default Loading;
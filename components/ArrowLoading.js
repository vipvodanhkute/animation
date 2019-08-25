import React, { Component } from 'react';
import styled from 'styled-components'
const Wapper=styled.section`
    position:relative;
    height:300px;
    .center{
        position:relative;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        height:60px;
        width:300px;
        border:4px solid #262626;
        border-radius:4px;
        overflow:hidden;
        &:hover{
            ul li{
            animation:arrowLoading 1s linear infinite;
            }
        }
        ul{
            margin:0;
            padding:0;
            display:flex;
            background:#ff0;
            height:60px;
            width:400px;
            li{
                position:relative;
                list-style:none;
                width:20px;
                height:30px;
                background:#262626;
                margin:0 10px;
                transform:skewX(35deg);
                animation:arrowLoading 2s linear infinite;
                &:before{
                    content:'';
                    position:absolute;
                    width:100%;
                    height:100%;
                    background:#000;
                    top:100%;
                    transform:skew(126deg) translateX(-20px);
                }
            }
        }
    }
    @keyframes arrowLoading{
        0%{
            transform:skewX(35deg) translateX(-100px); 
        }
        100%{
            transform:skewX(35deg) translateX(0); 
        }
    }
`
class ArrowLoading extends Component {
    render() {
        return (
            <Wapper>
                <div className="center">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </Wapper>
        );
    }
}

export default ArrowLoading;
import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper=styled.div`
    margin:0;
    padding:0;
    background:#234652 url(static/image/snowflake.png);
    background-repeat:no-repeat;
    background-size:cover;
    animation:eidMubarak 25s linear infinite;
    z-index:99;
    .container{
        position:relative;
        width:100%;
        height:640px;
        overflow:hidden;
        .center{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            .moon{
                position:relation;
                width:150px;
                height:150px;
                background:#fff;
                border-radius:50%;
                z-index:-2;
                &:before{
                    content:'';
                    position:absolute;
                    top:-15px;
                    right:-15px;
                    background:#234652;
                    width:100%;
                    height:100%;
                    border-radius:50%;  
                    z-index:1;
                }
                &:after{
                    content:'';
                    position:absolute;
                    top:0;
                    left:-325px;
                    height:100%;
                    width:400px;
                    background:linear-gradient(to left,rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%);
                    transform-origin:right; 
                    transform:rotate(-45deg);
                    z-index:-2;
                }
                .cloud{
                    position:absolute;
                    width:300px;
                    height:100px;
                    background:#fff;
                    border-radius:50px;
                    top:-100px;
                    left:-300px;
                    &:after{
                        content:'';
                        position:absolute;
                        top:-110px;
                        left:-368px;
                        width:560px;
                        height:240px;
                        background:linear-gradient(to left,rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%);
                        transform-origin:right;
                        transform:rotate(-45deg);
                        z-index:-2;
                    }
                    span{
                        position:absolute;
                        width:120px;
                        height:120px;
                        background:#fff;
                        border-radius:50%;
                        dipslay:block;
                    }
                    span:nth-child(1){
                        top:-50px;
                        left:30px;
                    }
                    span:nth-child(2){
                        top:-30px;
                        left:140px;
                    }
                    span:nth-child(3){
                        top:-80px;
                        left:80px;
                    }
                }
                .cloud2{
                    top:150px;
                    left:200px;
                }
            }
        }
    }
    @keyframes eidMubarak{
        0%{
            background-position:0;
        }
        100%{
            background-position:100% 0;
        }

    }
`
class EidMubarak extends Component {
    render() {
        return (
            <Wapper>
                <div className="container">
                    <div className="center">
                        <div className="moon">
                            <div className="cloud">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="cloud cloud2">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Wapper>
        );
    }
}
export default EidMubarak;
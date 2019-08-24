import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper = styled.section`
    position:relative;
    height:300px;
    background:#262626;
    .ring{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:150px;
        height:150px;
        background:transparent;
        border:3px solid #3c3c3c;
        border-radius:50%;
        text-align:center;
        line-height:150px;
        font-family:sans-serif;
        font-size:20px;
        color:#fff000;
        letter-spacing:4px;
        text-transform:uppercase;
        text-shadow:0 0 10px #fff000;   
        box-shadow:0 0 20px rgba(0,0,0,.5);
        &:before{
            content:'';
            position:absolute;
            top:-3px;
            left:-3px;
            width:100%;
            height:100%;
            border:3px solid transparent;
            border-top:3px solid #fff000;
            border-right:3px solid #fff000;
            border-radius:50%;
            animation:loaderCircle 2s linear infinite;
        }
        span{
            display:block;
            position:absolute;
            top:calc(50% - 2px);
            left:50%;
            width:50%;
            height:4px;
            background:transparent;
            transform-origin:left;
            animation:loader 2s linear infinite;
            &:before{
                content:'';
                position:absolute;
                width:16px;
                height:16px;
                border-radius:50%;
                background:#fff000;
                top:-6px;
                right:-8px;
                box-shadow:0 0 20px #fff000;
            }
        }
    }
    @keyframes loaderCircle{
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
    @keyframes loader{
        0%{
            transform:rotate(45deg);
        }
        100%{
            transform:rotate(405deg);
        }
    }
`
class Loader extends Component {
    render() {
        return (
            <Wapper>
                <div className="ring">
                    Loading
                    <span>

                    </span>
                </div>
            </Wapper>
        );
    }
}

export default Loader;
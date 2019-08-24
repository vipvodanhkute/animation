import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper = styled.section`
    position:relative;
    height:300px;
    background:#0079a5;
    .center{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:0;
        height:160px;
        border-left: 6px dashed rgba(255,255,255,.1);
        .arrow{
            position:absolute;
            left:-6px;
            top:0;
            height:40px;
            width:6px;
            background:#fff;
            animation:scrollDown 2s infinite;
            &:before{
                content:'';
                position:absolute;
                bottom:0;
                left:-10px;
                width:20px;
                height:20px;
                border-bottom:6px solid #fff;
                border-right:6px solid #fff;
                transform:rotate(45deg);

            }
        }
    }
    @keyframes scrollDown{
        0%{
            transform:translateY(0);
            opacity:0.5;
        }
        50%{
            transform:translateY(80px);
            opacity:1;
        }
        100%{
            transform:translateY(160px);
            opacity:0;
        }

    }
`
class ScrollDown extends Component {
    render() {
        return (
            <Wapper>
                <div className="center">
                    <div className="arrow">

                    </div>
                </div>
            </Wapper>
        );
    }
}

export default ScrollDown;
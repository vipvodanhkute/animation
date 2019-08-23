import React, { Component } from 'react';
import styled from 'styled-components'
const Wapper = styled.div`
    margin:0;
    padding:0;
   
    width:100%;
    height:300px;
    background-repeat:no-repeat;
    background-size: 100% 300px;
    .rain{
        height:100vh;
        animation: rain .3s linear infinite;
        &:before{
            content:'';
            position:absolute;
            width:100%;
            height:100%;
            background:#fff;
            animation:lighting 4s linear infinite;
            opacity:0;
        }
    }
    @keyframes rain{
         0%{
             background-position:0% 0%;
         }
         100%{
            background-position:20% 100%;
         }
    }
    @keyframes lighting{
        0%{ 
            opacity:0;
        }
        10%{
            opacity:0;
        }
        11%{
            opacity:1;
        }
        14%{
            opacity:0;
        }
        20%{
            opacity:0;
        }
        21%{
            opacity:1;
        }
        24%{
            opacity:0;
        }
        104%{
            opacity:0;
        }
    }
 `
class Rain extends Component {
    render() {
        return (
            <Wapper style={{backgroundImage:"url(static/image/cau.jpg)"}}>
                <div className="rain" style={{backgroundImage:"url(static/image/rain.png"}}>
                </div>
            </Wapper>
        );
    }
}

export default Rain;
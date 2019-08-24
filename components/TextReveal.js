import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper = styled.section`
    background:#bd0000;
    height:300px;
    position:relative;
    .box{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        text-align:center;
        border-bottom:5px solid #fff;
        overflow:hidden;
        box-shadow:0px 1px 0px rgba(0,0,0,.5);
        animation:reveal 2s linear forwards;
        h1{
            margin:0;
            paddding:0;
            font-family:vardana;
            font-size:4em;
            color:#fff;
            text-shadow:2px 2px 2px rgba(0,0,0,.5); 
            text-transform:uppercase;
        }
    }
    @keyframes reveal{
        0%{
            width:0px;
            height:0px;

        }
        30%{
            width:500px;
            height:0px;

        }
        60%{
            width:500px;
            height:80px;

        }
        80%{
            width:500px;
            height:80px;
            box-shadow:0px 1px 0px rgba(0,0,0,.5);

        }
        100%{
            width:500px;
            height:80px;
            box-shadow:0px 5px 0px rgba(0,0,0,.5); 
        }
    }

`
class TextReveal extends Component {
    render() {
        return (
            <Wapper>
                <div className="box">
                    <h1>Text Reveal</h1>
                </div>
            </Wapper>
        );
    }
}

export default TextReveal;
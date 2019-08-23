import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper=styled.div`
    margin:0;
    padding:0;
    background:#262626;
    width:100%;
    height:500px;
    position:relative;
    .stroke{
        width:400px;
        height:2px;
        background:#fff;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        &:before{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:#262626;
            animation:pencil 5s linear infinite;
            animation-timing-function:cubic-bezier(.63,.04,0,.87);
        }
        &:after{
            content:'\f040';
            font-family:fontAwesome;
            position:absolute;
            top:-45px;
            left:0;
            width:100%;
            height:100%;
            background:#262626;
            animation:pencil 5s linear infinite;
            font-size:50px;
            color:#a9ff08;
            transform:translateX(2px);
            animation-timing-function:cubic-bezier(.63,.04,0,.87);
        }
    }
    @keyframes pencil{
        0%{
            left:0;
        }
        50%{
            left:100%;
        }
        100%{
            left:0;
        }
    }
`

class Pencil extends Component {
    render() {
        return (
            <Wapper>
                <div className="stroke">
                    
                </div>
            </Wapper>
        );
    }
}

export default Pencil;
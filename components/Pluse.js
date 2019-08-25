import React, { Component } from 'react';
import styled from 'styled-components'
const Wapper=styled.section`
    background:#262626;
    position:relative;
    height:300px;
    .center{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        .pluse{
            width:100px;
            height:100px;
            background:#ff6d4a; 
            border-radius:50%;
            color:#fff;
            font-size:20px;
            text-align:center;
            line-height:100px;
            font-family:verdana;
            text-transform:uppercase;
            animation:pluse 3s linear infinite;
         
        }
    }
    @keyframes pluse{
        0%{
            box-shadow:0 0 0 0 rgba(255,109,74,.7),0 0 0 0 rgba(255,109,74,.7);
        }
        40%{
            box-shadow:0 0 0 50px rgba(255,109,74,0),0 0 0 0 rgba(255,109,74,.7);
        }
        80%{
            box-shadow:0 0 0 50px rgba(255,109,74,0),0 0 0 30px rgba(255,109,74,0);
        }
        100%{
            box-shadow:0 0 0 0 rgba(255,109,74,0),0 0 0 30px rgba(255,109,74,0);
        } 
    }
`
class Pluse extends Component {
    render() {
        return (
            <Wapper>
                <div className="center">
                    <div className="pluse">
                        PLUSE
                    </div>
                </div>
            </Wapper>
        );
    }
}

export default Pluse;
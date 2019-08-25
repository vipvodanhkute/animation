import React, { Component } from 'react';
import styled from 'styled-components'
const Wapper=styled.section`
position:relative;
height:300px;
span:nth-child(1){ 
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:60px;
    height:60px;
    border:6px solid #262626;
    border-radius:50%;
    border-bottom:6px solid transparent;
    animation:preLoader2 1s linear infinite;
}
span:nth-child(2){ 
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:100px;
    height:100px;
    border:6px solid #262626;
    border-radius:50%;
    border-top:6px solid transparent;
    animation:preLoader 2s linear infinite;
}
span:nth-child(3){ 
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:20px;
    height:20px;
    border:6px solid #262626;
    border-radius:50%;
    border-bottom:6px solid transparent;
    animation:preLoader 1s linear infinite;
}   
@keyframes preLoader{
    0%{
        transform:translate(-50%,-50%) rotate(0deg);
    }
    100%{
        transform:translate(-50%,-50%) rotate(360deg);
        }
}
@keyframes preLoader2{
    0%{
        transform:translate(-50%,-50%) rotate(0deg);
    }
    100%{
        transform:translate(-50%,-50%) rotate(-360deg);
        }
}
`
class PreLoader extends Component {
    render() {
        return (
            <Wapper>
                <div class="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Wapper>
        );
    }
}

export default PreLoader;
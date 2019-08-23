import React, { Component } from 'react';
import styled from 'styled-components'
const Wapper = styled.div`
    position:relative; 
    margin:0;
    padding:0;
    background:#262626;
    width:100%;
    height:500px;
    .box{
        width:400px;
        height:400px;
        position:absolute;
        top:20%;
        left:50%;
        transform:translate(-50%,-20%);
        border:4px solid transparent;
        border-image:linear-gradient(45deg,#ff0,#f0f,#f00,#0ff);
        border-image-slice:1;
        box-shadow:0 15px 25px rgba(0,0,0,.2);  
    }
`
class GradientBorder extends Component {
    render() {
        return (
            <Wapper>
                <div className="box"/>
            </Wapper>
        );
    }
}

export default GradientBorder;
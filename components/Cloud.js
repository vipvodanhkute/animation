import React, { Component } from 'react';
import styled from 'styled-components'

const Wapper=styled.div`
    position:relative;
    margin:0;
    padding:0;
    width:100%;
    .container{
    height:650px;
    width:100%;
    background-size:cover;
    overflow:hidden;
    position:relative;
    img{
        width:100%;
    }
    .cloud1{
        position:absolute;
        top:60px;
        animation:cloudOne infinite 30s linear;
    }
    }
    @keyframes cloudOne{
        0%{
            transform:translateX(-100%);
        }
        100%{
            transform:translateX(100%);
        }
    }
`
class Cloud extends Component {
    render() {
        return (
            <Wapper>
                <div className="container" style={{backgroundImage:"url(static/image/nhatrang.jpg)"}}>
                <div className="cloud1">
                        <img src="static/image/clouds.jpeg" />
                </div>
                </div>
            </Wapper>
        );
    }
}


export default Cloud;
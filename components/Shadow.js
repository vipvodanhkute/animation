import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper = styled.div`
    margin:0;
    padding:0;
    width:100%;
    height:500px;
    background:#000;
    position:relative; 
    padding-top:200px;
    z-index:-2;
    .shadow{
      margin:auto;
      position:relative;
      width:400px;
      height:250px;
      background:linear-gradient(0deg,#000,#262626);
      &:before,:after{
        content:'';
        position:absolute;
        top:-2px;
        left:-2px;
        background:linear-gradient(45deg,#fb0094,#0000ff,#ffff00,#fb0094,#0000ff,#ffff00);
        width:calc(100% + 4px);
        height:calc(100% + 4px); 
        background-size:400%; 
        z-index:-1;
        animation:shadow 20s linear infinite;
      }
      &:after{
        filter:blur(20px); 
      }
    }
    @keyframes shadow{
      0%{
        background-position: 0 0;
      }
      50%{
        background-position: 300% 0;
      }
      100%{
        background-position: 0 0;
      }
    }
`
class Shadow extends Component {
    render() {
        return (
            <Wapper>
                  <div className="shadow">
                  </div>
                </Wapper>
        );
    }
}

export default Shadow;
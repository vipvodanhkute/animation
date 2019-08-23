import React, { Component } from 'react';
import styled from 'styled-components'
const Wapper = styled.div`
    position:relative;
    margin:0;
    padding:0;
    background:#262626;
    width:100%;
    height:300px;
    font-family:arial;
    .loader{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        h1{
            margin:0;
            padding:0;
            text-transform:uppercase;
            font-size:10em;
            color:rgba(255,255,255,.1);
            background-size:cover;
            // background-repeat:repeat-x;
            -webkit-background-clip:text;
            animation:animate 15s linear infinite;  
        }
    }
    @keyframes animate{
        0%{
            background-position:left 0px top 150px;
        }
        40%{
            background-position:left 800px top -10px;
        }
        80%{
            background-position:left 1800px top -10px;
        }
        100%{
            background-position:left 2400px top 80px;
        }
    }
`
class Water extends Component {
    render() {
        return (
            <Wapper>
                <div className="loader">
                    <h1 style={{backgroundImage:"url(static/image/WaterSurfaceBubbles.png"}}>Water</h1>
                </div>
            </Wapper>
        );
    }
}
export default Water;
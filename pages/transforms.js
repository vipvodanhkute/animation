import React, { Component } from 'react';
import styled from 'styled-components'
/*
    transition-proprety:
    transition-duration:
    transition-delay:
    transition-timing-function:

    transform-origin: 20% 40%;
*/
const Card=styled.div`
    list-style-type:none;
    li{
        position:relative;
        width:25%;
        margin:0;
        display:block;
        box-sizing:border-box;
        float:left;
        &:hover{
            div{
                &.front{
                    animation:twirl 0.2s ease-in forwards;
                }
                &.back{
                    animation:twirl 0.2s ease-in forwards;
                }
            }
            
        }
        div{
            width:100%;
            padding:50% 0;
            text-align:center;
            color:#fff;
            font-size:20px;
            text-transform:uppercase;
            letter-spacing:2px;
            line-height:0;
            cursor:pointer;
            &.back{
                transform:rotateY(90deg);   
            }
            &.front{
                // position:absolute;
            }
        }
    }
    @keyframes twirl{
        0%{
            transform:rotateY(0deg)
        }
        100%{
            transform:roteteY(90deg)
        }
    }
`

const Box1=styled.div`
    width:200px;
    height:200px;
    background-color:red;
    transition:5s;
    &:hover{
        transform:rotateY(90deg);
    }
`
const Box2=styled.div`
    position:relative;
    width:200px;
    height:200px;
    background-color:blue;
    transition:5s;
    &:hover{
        transform: rotate3d(0,0,1,45deg);
    }
`
const Box3=styled.div`
    width:200px;
    height:200px;
    background-color:gray;
    animation:box3 5s infinite;
    @keyframes box3{
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(180deg); 
        }
    }
`
const Box4=styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  margin-left: 60px;
  border: 1px solid blue;
  perspective: 100px;

`

const Box5=styled.div`
padding: 50px;
position: absolute;
border: 1px solid black;
background-color: red;
background: rgba(100,100,100,0.5); 
transform-style: preserve-3d;
transform: rotateX(45deg);
`
class transforms extends Component {
    render() {
        return (
            <div>
                <Box1>
                    translate
                </Box1> 
                <Box2>
                    skew
                </Box2>
                <Box3/>
                <Box4>
                    <Box5/>
                </Box4>
                <Card>
                    <li>
                        <div className="front" style={{background:"#267df4"}}>Hello</div>
                        <div className="back" style={{background:"#4c8fea"}}>World</div>
                    </li>
                    <li>
                        <div className="front" style={{background:"#9126f4"}}>Hello</div>
                        <div className="back" style={{background:"#a144f7"}}>World</div>
                    </li>
                    <li>
                        <div className="front" style={{background:"#21bf3b"}}>Hello</div>
                        <div className="back" style={{background:"#4dd763"}}>World</div>
                    </li>
                    <li>
                        <div className="front" style={{background:"#c3333d"}}>Hello</div>
                        <div className="back" style={{background:"#e74853"}}>World</div>
                    </li>
                    <li>
                        <div className="front" style={{background:"#c3333d"}}>Hello</div>
                        <div className="back" style={{background:"#e74853"}}>World</div>
                    </li>
                    <li>
                        <div className="front" style={{background:"red"}}>Hello</div>
                        <div className="back" style={{background:"blue"}}>World</div>
                    </li>
                    <li>
                        <div className="front" style={{background:"#21bf3b"}}>Hello</div>
                        <div className="back" style={{background:"#4dd763"}}>World</div>
                    </li>
                    <li>
                        <div className="front" style={{background:"#9124f4"}}>Hello</div>
                        <div className="back" style={{background:"#a144f7"}}>World</div>
                    </li>
                </Card>
            </div>
        );
    }
}

export default transforms;
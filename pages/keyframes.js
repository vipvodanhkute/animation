import React, { Component } from 'react';
import styled from 'styled-components';
/*
    animation:[name]
    animation-name:
    animation-duration:
    animation-delay:
    animation-iteration-count:
    animation-direction:
    animation-timing-function:
    animation-fill-mode:
    animation-play-state: paused;
*/
const Box1 = styled.div`
    width:200px;
    height:200px;
    background-color:blue;
    animation:box1 5s infinite;
    @keyframes box1{
        0% {
            opacity:0;}
        }
        100% {
            opacity:1;
        }
    }
`

const Box2 = styled.div`
width:200px;
height:200px;
background-color:red;
animation:box2 2s infinite;
@keyframes box2{
    0% {
        font-size:10px
    }
    30% {
        font-size: 15px;
    }   
    100% {
        font-size:12px;
    }
}
`
const Box3 = styled.div`
width:200px;
height:200px;
background-color:yellow;
animation-name:box3;
animation-duration:4s;
animation-iteration-count:10;
animation-direction: alternate; /* or: normal */
animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
animation-fill-mode: forwards; /* or: backwards, both, none */
animation-delay: 2s; /* or: Xms */
@keyframes box3{
    0% {
        font-size:10px
    }
    30% {
        font-size: 15px;
    }   
    100% {
        font-size:12px;
    }
}
`
const Box4 = styled.div`
width:200px;
height:200px;
background-color:gray;
// animation-name:box4;
// animation-duration:4s;
// animation-iteration-count:10;
// animation-direction: alternate; /* or: normal */
// animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
// animation-fill-mode: forwards; /* or: backwards, both, none */
// animation-delay: 2s; /* or: Xms */
animation:box4 5s infinite reverse ;  
@keyframes box4{
   from {
       transform:rotate(0deg);
   }
   to{
       transform:rotate(360deg);
   }
}
`
const Box5=styled.div`
width:200px;
height:200px;
background-color:pink;
position:relative;
animation: box5 10s steps(10) infinite alternate;
@keyframes box5{
    from {
        top:0; 
        left:0;
    }
    to {
        top:100px;
        left:100px;
    }
}
`
const Box6 = styled.div`
    width: 200px;
    height: 200px;
    background: red;
    position: relative;
    animation-name: box6;
    animation-duration: 3s;  
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    @keyframes box6{
        from {
            left:0;
        }  
        to {
            left:200px;
            background-color:blue
        } 
    }
`
const Box7 = styled.div`
    width: 200px;
    height: 200px;
    background: red;
    position: relative;
    animation-name: box7;
    animation-duration: 3s;  
    animation-fill-mode: backwards;
    animation-iteration-count: infinite;
    @keyframes box7{
        from {
            left:0;
        }  
        to {
            left:200px;
            background-color:blue
        } 
    }
`
const Box8 = styled.div`
    width: 200px;
    height: 200px;
    background: red;
    position: relative;
    animation-name: box8;
    animation-duration: 3s;  
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    @keyframes box8{
        from {
            left:0;
        }  
        to {
            left:200px;
        } 
    }
`
const Box9 = styled.div`
    width: 200px;
    height: 200px;
    background: red;
    left:0;
    position: relative;
    animation-name: box9; 
    animation-duration: 3s;  
    animation-iteration-count: infinite;
    animation-fill-mode:both;   
    @keyframes box9{
        from {
            transform:translateX(200px); 
        }  
        to {
            transform:translateX(700px);
        } 
    }
`
class keyframe extends Component {
    render() {
        return (
            <>
                <Box1 />
                <br />
                <Box2>
                    Master Leee
                </Box2>
                <br />
                <Box3>
                    Master Yi
                </Box3>
                <br />
                <Box4/>
                <br />
                <Box5 />
                <br />
                <Box6 />
                <br />
                <Box7 />
                <br />
                <Box8 />
                <br />
                <Box9 />
            </>
        );
    }
}

export default keyframe;
import React, { Component } from 'react';
import styled from 'styled-components';
const Wapper = styled.section`
    position:relative;
    .bg{
        width:100%;
        height:100vh; 
        background:#00fd url(static/image/movingbackground.jpg);
        background-size:50% 100%;
        animation:movingbackground 15s linear infinite ;
        img{
            position:absolute; 
            bottom:0;
        }
    }
    @keyframes movingbackground{
        from{ 
            background-position:0 0;
        }
        to{
            background-position:-100% 0;
        }
    }
`
class MovingBackground extends Component {
    render() {
        return (
            <Wapper>
                <div className="bg">
                    <img src="static/image/car.png"/>
                </div>
            </Wapper>
        );
    }
}

export default MovingBackground;
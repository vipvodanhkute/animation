import React, { Component } from 'react';
import styled from 'styled-components';
import Headers from '../components/Header'
import Rotation from '../components/Rotation'
import Shadow from '../components/Shadow';
import BackgroundPulse from '../components/BackgroundPulse';
import PureCSSLeaves from '../components/PureCSSLeaves';
import Rain from '../components/Rain';
import Cloud from '../components/Cloud'
import Water from '../components/Water';
import EidMubarak from '../components/EidMubarak';
import Pencil from '../components/Pencil';
import GradientBorder from '../components/GradientBorder';
import TextEffect from '../components/TextEffect';
import Loading from '../components/Loading';
import Loader from '../components/Loader';
import ScrollDown from '../components/ScrollDown';
import TextReveal from '../components/TextReveal';
import MovingBackground from '../components/MovingBackground';

class effect extends Component {
    render() {
        return (
            <>  <Headers/>
                <Rotation/>
                <Shadow/>
                <BackgroundPulse/>
                <PureCSSLeaves/>
                <Rain/>
                <Cloud/>
                <Water/> 
                <EidMubarak/>
                <Pencil/>
                <GradientBorder/>
                <TextEffect/>
                <Loading/>
                <Loader/>
                <ScrollDown/>
                <TextReveal/>
                <MovingBackground/>
            </>
        );
    }
}

export default effect;
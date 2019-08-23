import React, { Component } from 'react';
import styled from 'styled-components';
import Rotation from '../components/Rotation'
import Shadow from '../components/Shadow';
import BackgroundPulse from '../components/BackgroundPulse';
import PureCSSLeaves from '../components/PureCSSLeaves';
import Rain from '../components/Rain';

class effect extends Component {
    render() {
        return (
            <>  
                <Rotation/>
                <Shadow/>
                <BackgroundPulse/>
                <PureCSSLeaves/>
                <Rain/>
            </>
        );
    }
}

export default effect;
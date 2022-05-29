import React, { useState, useEffect } from 'react';
import './DrumDreaming.css'
import { Fab } from '@mui/material'

const DrumDreaming = ({ clip, clipId, keyCode, keyTrigger, power, updateDisplay,  }) => {

    // One of the first function to be invoked
    // componentDidMount() {
    //     document.addEventListener('keydown', () => handleKeyPress());
    // }
    // the last function to be invoked
    // componentWillUnmount() {
    //     document.removeEventListener('keydown', handleKeyPress);
    // }

    useEffect(() => {
        document.addEventListener('keydown', () => handleKeyPress())
    }, []);

    // STYLES

    const activeStyle = {
        backgroundColor: 'orange',
        marginTop: 13
    };
    
    const inactiveStyle = {
        backgroundColor: 'grey',
        marginTop: 10,
    };

    // FUNCTIONS
    const [padStyle, setPadStyle] = useState(() => inactiveStyle);

    // Other functions
    const handleKeyPress = (e) => {
        if (e.keyCode === keyCode) {
            playSound();
        }
    }

    const activatePad = () => {
        if (power) {
            if (padStyle.backgroundColor === 'orange') {

                setPadStyle(inactiveStyle);

            } else {

                setPadStyle(activeStyle)

            }
        } else if (padStyle.marginTop === 13) {

            setPadStyle(inactiveStyle);

        } else {

        setPadStyle({ 
            marginTop: 13, 
            backgroundColor: 'grey', 
        });

        }
    }

    const playSound = () => {
        const sound = document.getElementById(keyTrigger);
        sound.currentTime = 0;
        sound.play();
        activatePad();
        setTimeout(() => {
            setPadStyle({ 
                marginTop: 13, 
                backgroundColor: 'grey', 
            });
        }, 400);
        updateDisplay(clipId.replace(/-/g, ' '));
    }

    return (
        <Fab
            className='drum-pad'
            id={clipId}
            onClick={() => playSound()}
            style={padStyle}
        >
            <audio
                className='clip'
                id={keyTrigger}
                src={clip}
            />
            {keyTrigger}
        </Fab>
    )
}

export default DrumDreaming



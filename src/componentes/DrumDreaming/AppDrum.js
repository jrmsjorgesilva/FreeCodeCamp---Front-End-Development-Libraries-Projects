import React, { useState } from 'react';
import PadBank from './PadBank'
import { Stack, Switch, Slider, Alert } from '@mui/material'
import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa';

const AppDrum = ({}) => {

    const bankOne = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ];

    const bankTwo = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Chord-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Chord-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Chord-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Shaker',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: 'Punchy-Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Side-Stick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Snare',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }
    ];

    // USE STATE
    const [power, setPower] = useState(() => true);
    const [display, setDisplay] = useState(() => String.fromCharCode(160));
    const [currentPadBank, setCurrentPadBank] = useState(() => bankOne);
    const [currentPadBankId, setCurrentPadBankId] = useState(() => 'Heater Kit');
    const [sliderVal, setSliderVal] = useState(() => 0.3);

    // FUNCTIONS
    const powerControl = () => {
        setPower(!power);
        setDisplay(String.fromCharCode(160));
    }

    const selectBank = () => {

        if (power) {
            if (currentPadBankId === 'Heater Kit') {

                setCurrentPadBank(bankTwo);
                setDisplay('Smooth Piano Kit');
                setCurrentPadBankId('Smooth Piano Kit')

            } else {

                setCurrentPadBank(bankOne);
                setDisplay('Heater Kit');
                setCurrentPadBankId('Heater Kit')

            }
        }
    }

    const displayClipName = (name) => {
        if (power) {
            setDisplay(name);
        }
    }

    const adjustVolume = (e) => {
        if (power) {
            setSliderVal(e.target.value);
            setDisplay('Volume: ' + Math.round(e.target.value * 100))
            setTimeout(() => clearDisplay(), 1000);
        }
    }

    const clearDisplay = () => {
        setDisplay(String.fromCharCode(160))
    }

    // SLIDER //

    const powerSlider = power
      ? {
          float: 'right'
        }
      : {
          float: 'left'
        };
    const bankSlider =
      currentPadBank === bankOne
        ? {
            float: 'left'
          }
        : {
            float: 'right'
          };
    {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = sliderVal;
      });
    }

    return (
        <div class='app__container center' id='drum-machine'>
            <h1 className='app__title'>AppDrum</h1>
            <Stack spacing={4} justifyContent='center' alignItems='center' >
                <PadBank
                    clipVolume={sliderVal}
                    currentPadBank={currentPadBank}
                    power={power}
                    updateDisplay={displayClipName}
                />

                {/* <div className='logo'>
                    <div className='inner-logo '>{'FCC' + String.fromCharCode(160)}</div>
                    <i className='inner-logo fa fa-free-code-camp' />
                </div> */}

                <div className='controls-container'>
                    <Alert severity='info' className='center m-3' >
                        <h1>{display}</h1>
                    </Alert>
                    <div >
                        <FaVolumeDown style={{ margin: '0px 20px', fontSize: '30px' }} />
                        <Slider 
                            style={{
                                width: '300px',
                            }}
                            aria-label="Volume"
                            max={1}
                            min={0}
                            onChange={(e) => setSliderVal(e.target.value)}
                            step={0.01}
                            value={sliderVal} 
                        />
                        <FaVolumeUp style={{ margin: '0px 20px', fontSize: '30px' }} />
                    </div>
                    <Stack direction='row' justifyContent='space-between'>
                        <div className='control'>
                            <small>{power ? 'Ligado' : 'Desligado'} </small>
                            <Switch color="primary" defaultChecked onClick={powerControl}/>
                        </div>
                        <div className='control'>
                            <small>{currentPadBankId === 'Heater Kit' ? 'Boom Bap' : 'Piano Beat'} </small>
                            <Switch color="primary" onClick={selectBank}/>
                        </div>
                    </Stack>
                </div>
            </Stack>

        </div>
    )
}

export default AppDrum;
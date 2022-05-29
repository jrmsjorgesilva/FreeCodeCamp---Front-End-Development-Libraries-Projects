import React, { useState } from 'react'
import DrumDreaming from './DrumDreaming'

const PadBank = ({ clipVolume, currentPadBank, power, updateDisplay }) => {
  
    let padBank;
    if (power) {
      padBank = currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumDreaming
            clip={padBankArr[i].url}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={power}
            updateDisplay={updateDisplay}
          />
        );
      });
    } else {
      padBank = currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumDreaming
            clip='#'
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={power}
            updateDisplay={updateDisplay}
          />
        );
      });
    }
    return (
        <div className='pad-bank'>
            {padBank}
        </div>
    );
}

export default PadBank;
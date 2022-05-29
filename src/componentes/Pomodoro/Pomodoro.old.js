import React, { useState, useEffect } from 'react'
import './Pomodoro.css';
import { FaTimer, FaClock, FaPlay, FaPlus, FaMinus, FaRestart } from 'react-icons/fa';
import { Box, Stack, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { 
    increaseSessionAction, 
    decreaseSessionAction, 
    increaseBreakAction, 
    decreaseBreakAction, 
    resetAction, 
} from '../Redux/Actions/PomodoroActions'

const Pomodoro = () => {

    // useSelector e useDispatch - redux
    const reduxSession = useSelector(state => state.PomodoroReducer.session);
    const reduxBreak = useSelector(state => state.PomodoroReducer.break);

    console.log('seção', reduxSession);
    console.log('break', reduxBreak);

    // %%%%%%%%%%
    // TODO -> REALIZAR INTEGRAÇÃO REDUX -> CORRIGIR BUGS
    // %%%%%%%%%%

    const dispatch = useDispatch();

    // Initialize state
    const [timerState, setTimerState] = useState(() => 'Stopped');
    const [timerType, setTimerType] = useState(() => 'Session');
    const [remainingTime, setRemainingTime] = useState(() => 1500);
    const [sessionLength, setSessionLength] = useState(() => 25);
    const [breakLength, setBreakLength] = useState(() => 5);

        // Auxiliar variables
    var audio = null;
    var timerId = null;

    const tick = () => {
        // const {timerState, timerType, remainingTime, sessionLength, breakLength} = state;
        if (timerState !== "Running") {
            if (remainingTime === 0) {
                beep(); 
                
                const newTimerType = timerType === "Session" ? "Break" : "Session";
                const newRemainingTime = timerType === "Session" ? breakLength * 60 : sessionLength * 60;
                
                setTimerType(newTimerType);
                setRemainingTime(newRemainingTime)
                
                return;
            }
            setRemainingTime((prev) => {
                return prev - 1;
            });
            console.log('sadasdfsdf', remainingTime);
        }

    }

    const beep = () => {
        if (audio === null) {
            audio = document.getElementById('beep'); 
        }
        audio.play();
    }

    const formatTime = (time) => {
        const minutes = parseInt(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return minutes + ":" + seconds;
    }

    const onStartStop = () => {
        const timerVerify = timerState;
        if (timerVerify === 'Running') {
            clearInterval(timerId);
            setTimerState(() => 'Stopped');
            console.log('entrou no if');

        } else {
            // console.log('Acompanhamento->',setInterval(tick, 1000), formatTime(remainingTime));
            timerId = setInterval(tick, 1000);
            setTimerState(() => 'Running');
            console.log('entrou no else');
        }
    }
  
    const onReset = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        if (timerId) {
            clearInterval(timerId); 
        }
        clearInterval(timerId); 

        setTimerState('Stopped');
        setTimerType('Session');
        setRemainingTime(1500);
        setSessionLength(25);
        setBreakLength(5);
    }
  
    const onDecreaseBreak = () => {
        // const {breakLength, timerState, timerType} = state;
        if (timerState === "Stopped" && breakLength > 1) {
            if (timerType === "Break") {
                setBreakLength(breakLength - 1);
                setRemainingTime((breakLength - 1) * 60);
            } else {
                setBreakLength(breakLength - 1);
            }
        }
    }
  
    const onIncreaseBreak = () => {
        // const {breakLength, timerState, timerType} = state;
        if (timerState === "Stopped" && breakLength < 60) {
            if (timerType === "Break") {
                setBreakLength(breakLength + 1);
                setRemainingTime((breakLength + 1) * 60);
            } else {
                setBreakLength(breakLength + 1);
            }
        }
    }
  
    const onDecreaseSession = () => {
        // const {sessionLength, timerState, timerType} = state;
        if (timerState === "Stopped" && sessionLength > 1) {
            if (timerType === "Session") {
                setSessionLength(sessionLength - 1);
                setRemainingTime((sessionLength - 1) * 60);
            } else {
                setSessionLength(sessionLength - 1);
            }
        }
    }
  
    const onIncreaseSession = () => {

        if (timerState === "Stopped" && sessionLength < 60) {
            if (timerType === "Session") {
                setSessionLength(sessionLength + 1);
                setRemainingTime((sessionLength + 1) * 60);
                // dispatch(increaseSessionAction());
            } else {
                setSessionLength(sessionLength + 1);
                // dispatch(increaseSessionAction());
            }
        }
    }

  return (
    <div className='app__container center'>
        <div  id='clock'>
            <div id="indicator">
                <div id="timer-label">{timerType}</div>
                <div id="time-left">{formatTime(remainingTime)}</div>
                <div id="start_stop" className="button" onClick={() => onStartStop()}>
                    {timerState === "Stopped" ? "Start" : "Stop"}
                </div>
            </div>
            <div id="footer">
                <div id="break-settings" className="settings">
                    <div className="buttons-and-value">
                        <div id="break-decrement" className="button" onClick={() => onDecreaseBreak()}>-</div>
                        <div id="break-length">{breakLength}</div>
                        <div id="break-increment" className="button" onClick={() => onIncreaseBreak()}>+</div>
                    </div>
                    <div id="break-label" className="setting-label">Break Length</div>
                </div>

                <div id="reset" className="button" onClick={() => onReset()}>Reset</div>
                
                <div id="session-settings" className="settings">
                    <div className="buttons-and-value">
                        <div id="session-decrement" className="button" onClick={() => onDecreaseSession()}>-</div>
                        <div id="session-length">{sessionLength}</div>
                        <div id="session-increment" className="button" onClick={() => onIncreaseSession()}>+</div>
                    </div>
                    <div id="session-label">Session Length</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pomodoro;

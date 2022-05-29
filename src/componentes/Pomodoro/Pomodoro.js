import React from 'react'
import './Pomodoro.css'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
      
        // Bind UI functions
        this.onReset = this.onReset.bind(this);
        this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
        this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
        this.onDecreaseSession = this.onDecreaseSession.bind(this);
        this.onIncreaseSession = this.onIncreaseSession.bind(this);
        this.onStartStop = this.onStartStop.bind(this);
        
        // Bind auxiliar functions
        this.formatTime = this.formatTime.bind(this);
        this.beep = this.beep.bind(this);
        this.tick = this.tick.bind(this);

        // Auxiliar variables
        this.audio = null;
        this.timerId = null;

        // Initialize state
        this.state = {
            timerState: "Stopped",
            timerType: "Session",
            remainingTime: 1500,
            sessionLength: 25,
            breakLength: 5
        }
    }
  
    tick() {
        const {timerState, timerType, remainingTime, sessionLength, breakLength} = this.state;
        if (timerState === "Running") {
            if (remainingTime === 0) {
                this.beep(); 
                
                const newTimerType = timerType === "Session" ? "Break" : "Session";
                const newRemainingTime = timerType === "Session" ? breakLength * 60 : sessionLength * 60;
              
                this.setState({
                  timerType: newTimerType,
                  remainingTime: newRemainingTime
                });
              
                return;
            }
            this.setState({remainingTime: remainingTime - 1});
        }
    }

    beep() {
        if (this.audio === null) {
            this.audio = document.getElementById('beep'); 
        }
        this.audio.play();
    }

    formatTime(time) {
        const minutes = parseInt(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return minutes + ":" + seconds;
    }

    onStartStop() {
        const timerState = this.state.timerState;
        if (timerState === "Running") {
            clearInterval(this.timerId);
            this.setState({timerState: "Stopped"});
        } else {
            this.timerId = setInterval(this.tick, 1000);
            this.setState({timerState: "Running"});
        }
    }
  
    onReset() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        if (this.timerId) {
            clearInterval(this.timerId); 
        }
        this.setState({
            timerState: "Stopped",
            timerType: "Session",
            remainingTime: 1500,
            sessionLength: 25,
            breakLength: 5
        });
    }
  
    onDecreaseBreak() {
        const {breakLength, timerState, timerType} = this.state;
        if (timerState === "Stopped" && breakLength > 1) {
            if (timerType === "Break") {
                this.setState({
                    breakLength: breakLength - 1,
                    remainingTime: (breakLength - 1) * 60
                });
            } else {
                this.setState({
                    breakLength: breakLength - 1
                });
            }
        }
    }
  
    onIncreaseBreak() {
        const {breakLength, timerState, timerType} = this.state;
        if (timerState === "Stopped" && breakLength < 60) {
            if (timerType === "Break") {
                this.setState({
                    breakLength: breakLength + 1,
                    remainingTime: (breakLength + 1) * 60
                });
            } else {
                this.setState({
                    breakLength: breakLength + 1
                });
            }
        }
    }
  
    onDecreaseSession() {
        const {sessionLength, timerState, timerType} = this.state;
        if (timerState === "Stopped" && sessionLength > 1) {
            if (timerType === "Session") {
                this.setState({
                    sessionLength: sessionLength - 1,
                    remainingTime: (sessionLength - 1) * 60
                });
            } else {
                this.setState({
                    sessionLength: sessionLength - 1
                });
            }
        }
    }
  
    onIncreaseSession() {
        const {sessionLength, timerState, timerType} = this.state;
        if (timerState === "Stopped" && sessionLength < 60) {
            if (timerType === "Session") {
                this.setState({
                    sessionLength: sessionLength + 1,
                    remainingTime: (sessionLength + 1) * 60
                });
            } else {
                this.setState({
                    sessionLength: sessionLength + 1
                });
            }
        }
    }

    render() {
        const {remainingTime, sessionLength, breakLength, timerType, timerState} = this.state;
        return (
            <div className='app__container center'>
                <div id="clock">
                    <h1 className='app__title center'>Pomodoro</h1>
                    <div id="indicator">
                        <div id="timer-label">{timerType == 'Session' ? 'Seção' : 'Intervalo'}</div>
                        <div id="time-left">{this.formatTime(remainingTime)}</div>
                        <div id="start_stop" className="button" onClick={() => this.onStartStop()}>
                        {timerState == "Stopped" ? "Iniciar" : "Parar"}
                        </div>
                    </div>
                
                    

                    <div id="footer">
                        <div id="break-settings" className="settings">
                            <div className="buttons-and-value">
                                <div id="break-decrement" className="button" onClick={() => this.onDecreaseBreak()}>-</div>
                                <div id="break-length">{breakLength}</div>
                                <div id="break-increment" className="button" onClick={() => this.onIncreaseBreak()}>+</div>
                            </div>
                            <div id="break-label" className="setting-label">Duração do Intervalo</div>
                        </div>

                        <div id="reset" className="button" onClick={() => this.onReset()}>Resetar</div>
                        
                        <div id="session-settings" className="settings">
                            <div className="buttons-and-value">
                                <div id="session-decrement" className="button" onClick={() => this.onDecreaseSession()}>-</div>
                                <div id="session-length">{sessionLength}</div>
                                <div id="session-increment" className="button" onClick={() => this.onIncreaseSession()}>+</div>
                            </div>
                            <div id="session-label">Duração da Seção</div>
                        </div>
                    </div>
                
                    <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
                </div>
            </div>
      );
    }
}
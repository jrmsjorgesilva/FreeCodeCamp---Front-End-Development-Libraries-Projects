import React from 'react'
import { Button, Fab, Stack } from '@mui/material'
import { FaCalculator, FaMusic, FaMarkdown, FaClock, FaQuoteLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="app__container center">
      <h1 className='app__title'>Escolha um App para avaliar</h1>
      <Stack 
        className='stack'
        direction='column'
        marginTop={10} 
        marginBottom={10} 
        justifyContent='space-between' 
        alignitems='space-between'
      >
        <Link to='/Calculator'>
          <Fab
            variant="extended"
            className='fab-hero' 
            style={{
              backgroundColor: 'lime',
              color: 'white',
            }}  
          >
            <FaCalculator style={{ margin: '0px 5px'}} />
            Calculadora
          </Fab>
        </Link>
        <Link to='/pomodoro'>
          <Fab
            variant="extended"
            className='fab-hero' 
            style={{
              backgroundColor: 'lime',
              color: 'white',
            }}  
          >
            <FaClock style={{ margin: '0px 5px'}} />
            Pomodoro
          </Fab>
        </Link>
        <Link to='/AppDrum'>
          <Fab
            variant="extended"
            className='fab-hero' 
            style={{
              backgroundColor: 'lime',
              color: 'white',
            }}  
          >
            <FaMusic style={{ margin: '0px 5px'}} />
            AppDrum
          </Fab>
        </Link>
        <Link to='/markdownpreviewer'>
          <Fab
            variant="extended"
            className='fab-hero' 
            style={{
              backgroundColor: 'lime',
              color: 'white',
            }}  
          >
            <FaMarkdown style={{ margin: '0px 5px'}} />
            Markdown
          </Fab>
        </Link>
        <Link to='/randomquotes'>
          <Fab
            variant="extended"
            className='fab-hero' 
            style={{
              backgroundColor: 'lime',
              color: 'white',
            }}  
          >
            <FaQuoteLeft style={{ margin: '0px 5px'}} />
            Frases API
          </Fab>
        </Link>
      </Stack>

    </div>
  );
}

export default App;

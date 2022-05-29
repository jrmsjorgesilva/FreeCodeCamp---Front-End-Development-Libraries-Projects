import React, { useState } from 'react'
import { Fab, Button, Stack } from '@mui/material'
import { FaRobot } from 'react-icons/fa'
const CalculatorButtons = ({ numbers, decimal, evaluate, initialize, operators }) => {

    // STYLES
    const clearStyle = { background: '#ac3939' };
    const operatorStyle = { background: '#666666' };
    const equalsStyle = {
        background: '#004466',
    };

    return (
    <div>

        <Stack direction='row' justifyContent='space-around' align-items='center' >

            <stack direction='column'>

                <Stack direction='row' justifyContent='center'>
                    {/* botões teclado 7, 8, 9 */}
                    <Fab id="seven" onClick={(e) => numbers(e)} value="7">
                        7
                    </Fab>
                    <Fab id="eight" onClick={(e) => numbers(e)} value="8">
                        8
                    </Fab>
                    <Fab id="nine" onClick={(e) => numbers(e)} value="9">
                        9
                    </Fab>
                    {/* botões dividir */}
                    <Fab
                        id="divide"
                        onClick={(e) => operators(e)}
                        style={operatorStyle}
                        value="/"
                    >
                        /
                    </Fab>
                </Stack>

                <Stack direction='row' justifyContent='center'>
                    {/* botões teclado 4, 5, 6 */}
                    <Fab id="four" onClick={(e) => numbers(e)} value="4">
                        4
                    </Fab>
                    <Fab id="five" onClick={(e) => numbers(e)} value="5">
                        5
                    </Fab>
                    <Fab id="six" onClick={(e) => numbers(e)} value="6">
                        6
                    </Fab>
                    {/* botões teclado multiplicar */}
                    <Fab
                        id="multiply"
                        onClick={(e) => operators(e)}
                        style={operatorStyle}
                        value="x"
                    >
                        x
                    </Fab>
                </Stack>

                <Stack direction='row' justifyContent='center'>
                    {/* botões teclado 1 2 3 */}
                    <Fab id="one" onClick={(e) => numbers(e)} value="1">
                        1
                    </Fab>
                    <Fab id="two" onClick={(e) => numbers(e)} value="2">
                        2
                    </Fab>
                    <Fab id="three" onClick={(e) => numbers(e)} value="3">
                        3
                    </Fab>
                    {/* botão adicionar */}
                    <Fab
                        id="add"
                        onClick={(e) => operators(e)}
                        style={operatorStyle}
                        value="+"
                    >
                        +
                    </Fab>
                </Stack>

                <Stack direction='row' justifyContent='center'>
                    {/* botão ponto */}
                    <Fab id="decimal" onClick={() => decimal()} value=".">
                        .
                    </Fab>
                    
                    {/* botão zero */}
                    <Fab
                        className="jumbo"
                        id="zero"
                        onClick={(e) => numbers(e)}
                        value="0"
                    >
                        0
                    </Fab>

                    {/* botão igualdade */}
                    <Fab
                        id="equals"
                        onClick={() => evaluate()}
                        style={equalsStyle}
                        value="="
                    >
                        =
                    </Fab>
                    {/* botão de teclado subtração */}
                    <Fab
                        id="subtract"
                        onClick={(e) => operators(e)}
                        style={operatorStyle}
                        value="‑"
                    >
                        ‑
                    </Fab>

                </Stack>

            </stack>

            <Stack direction='column' justifyContent='space-between' aligntItems='space-between'>
                {/* botão jumbo AC teclado */}
                <Fab
                    className="jumbo"
                    id="clear"
                    onClick={() => initialize()}
                    style={clearStyle}
                    value="AC"
                >
                    AC
                </Fab>

                {/* botao robot calc */}
                <Fab
                    className="jumbo"
                    id="clear"
                    style={{ backgroundColor: 'lime' }}
                    value=""
                >
                    <a href='https://www.calculator.net/' target='_blank'>
                        <FaRobot style={{ color: 'white', fontSize: '30px', marginTop: '5px' }} />
                    </a>
                </Fab>

                

            </Stack>

        </Stack>

    </div>
    );
}

export default CalculatorButtons;
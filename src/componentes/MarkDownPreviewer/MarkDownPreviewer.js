import React, { useState, useEffect } from 'react'
import { TextField, Paper, Box, Stack } from '@mui/material'

const MarkDownPreviewer = () => {

  const defaultMarkdown = `
  # React Markdown Previewer

  ## Digite seu Markdown no Editor!
  <br><br>
  
  ### Funcionalidade principal
  
  - A janela de visualização atualiza em tempo real com sintaxe de remarcação
  - O editor tem alguma entrada predefinida no carregamento da página
  - BÔNUS: Use &lt;br&gt; para quebras de linha
  
  <br>
  
  \`O realce de sintaxe está funcionando?\`
  \`\`\`javascript
  let s = "Realce de sintaxe JavaScript";
  alerta(s);
  \`\`\`
  <br>
  
  > “Se você está angustiado por algo externo, a dor não se deve à coisa em si, mas à sua avaliação dela; e isso você tem o poder de revogar a qualquer momento.”
  ― Marco Aurélio, Meditações
  <br>
  
  ![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
  <br>
  
  Codificada por **Stahlone**, 2019 para [freeCodeCamp](https://www.freecodecamp.org) Desafios das bibliotecas de front-end
  `

  const [text, setText] = useState(() => defaultMarkdown);

  return (
    <Box className='app__container'>
        <h1 class='app__title center' id="title">Markdown Previewer</h1>
        <Stack 
            className='markdown-box'
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <TextField
              className='markdown-box'
              id="editor" 
              label="Pré-visualizador de linguagem de marcação"
              multiline
              rows={8}
              fullWidth
              style={{
                minWidth: '50%',
                minHeight: '200px',
              }}
              defaultValue="Digite algum texto de remarcação..."
              variant="filled"
              value={ text } 
              onChange={ (e) => setText(e.target.value) } 
            />
            <Paper 
              className='markdown-box'
              id="preview"
              dangerouslySetInnerHTML={{ __html: text }}
              fullWidth
              style={{
                minWidth: '50%',
                minHeight: '200px',
                padding: '15px'
              }}

            >
            </Paper> 
        </Stack>
    </Box>
  )
}

export default MarkDownPreviewer
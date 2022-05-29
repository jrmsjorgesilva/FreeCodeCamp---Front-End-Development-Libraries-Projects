import React, { useState, useEffect } from 'react'
import { TextField, Paper, Box, Stack } from '@mui/material'

const MarkDownPreviewer = () => {

  const defaultMarkdown = `# React Markdown Previewer

  ## Type your Markdown in the Editor!
  <br><br>
  
  ### Main functionality
  
  - Preview window updates real time with markdown syntax
  - The editor has some predefined input on page load
  - BONUS: Use &lt;br&gt; for line breaks
  
  <br>
  
  \`Is the syntax highlighting even working?\`
  \`\`\`javascript
  let s = "JavaScript syntax highlighting";
  alert(s);
  \`\`\`
  <br>
  
  > “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
  ― Marcus Aurelius, Meditations 
  <br>
  
  ![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
  <br>
  
  Coded by **Stahlone**, 2019 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
  `

  const [text, setText] = useState(() => defaultMarkdown);

  return (
    <Box className='app__container'>
        <h1 class='app__title center' id="title">Markdown Previewer</h1>
        <Stack 
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <TextField
            id="editor" 
            label="Pré-visualizador de linguagem de marcação"
            multiline
            rows={12}
            fullWidth
            style={{
              minWidth: '50%',
              minHeight: '300px'
            }}
            defaultValue="Digite algum texto de remarcação..."
            variant="filled"
            value={ text } 
            onChange={ (e) => setText(e.target.value) } 
            />
            <Paper 
              id="preview"
              dangerouslySetInnerHTML={{ __html: text }}
              fullWidth
              style={{
                minWidth: '50%',
                minHeight: '300px',
                padding: '15px'
              }}

            >
            </Paper> 
        </Stack>
    </Box>
  )
}

export default MarkDownPreviewer
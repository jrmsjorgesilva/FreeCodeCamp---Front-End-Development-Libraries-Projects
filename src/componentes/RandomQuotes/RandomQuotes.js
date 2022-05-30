import React, { useState, useEffect } from 'react'
import { Box, Stack, Button } from '@mui/material'
import { FaBrain, FaQuoteLeft, FaTwitter } from 'react-icons/fa'

const RandomQuotes = () => {

  let [fetchedQuotes, setFetchedQuotes] = useState(() => [
    {
        id: 1,
        quote: 'Clique no botão para ter uma quote gerada aleatoriamente',
        author: 'JM Softwares'
    },
    {
        id: 2,
        quote: 'Os planos de Deus são justos e certeiros! Tenha fé e confiança! ',
        author: 'Renata vasconcelos'
    },
    {
        id: 3,
        quote: 'Nossas vidas são definidas por oportunidades, inclusive aquelas que perdemos.',
        author: 'Renan dias'
    },
    {
        id: 4,
        quote: 'Não espere pelo momento perfeito. Faça de cada momento a oportunidade perfeita.',
        author: 'Mariana de albuquerque'
    },
    {
        id: 5,
        quote: 'Vencedores não são pessoas que nunca falham, são pessoas que nunca desistem.🦸‍♂️',
        author: 'Genesio da Lapa'
    },
    {
        id: 6,
        quote: 'Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.',
        author: 'Sandra Sousa e Souza de Suoussa'
    }
  ]);

  useEffect(() => {

    const URL_API_QUOTES = 'https://dummyjson.com/quotes';

    const fetchQuotes = async () => {

        try {
            // buscar dados assincronos
            const res = await fetch(URL_API_QUOTES);
            const data = await res.json();
            setFetchedQuotes(data.quotes);
            console.log('ffdsdfsd', data.quotes);
        } catch (error) {
            // coleta de erros
            console.log(error);
        }

    }

    fetchQuotes();

  }, [])


//   const quotes = fetchedQuotes;
  const quotes = fetchedQuotes;

  const [quote, setQuote] = useState(() => 0)

  return (
    <Box id="quote-box" className='app__container'>
        <h1 className='app__title center'>RandomQuotes</h1>
        <Stack 
            direction='column' 
            justifyContent='center' 
            alignItems='center'
        >
            <span 
                id="text"
                className='quote'
                style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: '50px 20px',
                    height: '30vh'
                }}
            >
                <FaQuoteLeft
                    style={{
                        color: 'lime',
                        margin: '0px 30px',
                        fontSize: '50px'
                    }}
                />
                {quotes[quote].quote}
                <p id="author" style={{ color: 'lime', margin: '20px 10px', fontSize: '14px' }}>
                    {quotes[quote].author}
                    <a 
                        id='tweet-quote' 
                        class="twitter-share-button" 
                        href={`https://twitter.com/intent/tweet?text=${quotes[quote].quote}`} 
                        target='_blank'
                    >
                        <FaTwitter style={{ color: 'skyblue', fontSize: '18px', margin: '5px', transform: 'translateY(8px)' }} />
                    </a>
                </p>
            </span>
            <Button 
                id="new-quote"
                style={{
                    display: 'block',
                    width: '100%'
                }}
                variant='contained'
                onClick={() => setQuote(Math.floor(Math.random() * (quotes.length - 1) + 1))}
            >
                Gerar Nova Frase
                <FaBrain style={{ margin: '0px 10px'}} />
            </Button>
        </Stack>
    </Box>
  )
}

export default RandomQuotes
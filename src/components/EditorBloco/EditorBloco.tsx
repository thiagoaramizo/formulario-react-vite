import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Card, CardContent, Input, TextField, Typography } from '@mui/material';

import { addBloco } from '../../redux/documentoSlice';

export default function EditorBloco() {

    const dispatch = useDispatch()

    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')

    const handleTituloChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setTitulo(event.target.value)
    }
    const handleTextoChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setTexto(event.target.value)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault()
        if (titulo && texto) {
            const id = Math.random().toString(36).slice(2)
            const bloco = { 
                id: id, 
                tipo: 'texto', 
                conteudo: { 
                    titulo: titulo, 
                    texto: texto 
                }
            }
            dispatch(addBloco(bloco))
            setTitulo('')
            setTexto('')
        }
    }

    return (
        <Card sx={{ my: 3 }}>
            <CardContent>
                <Typography variant='h6' mb={3} align='center'>
                    Formulário de bloco
                </Typography>

                <Box component="form" onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}>
                    <TextField
                        value={titulo}
                        onChange={handleTituloChange}
                        label='Titulo'
                        color='secondary'
                        size='small'
                        required
                    />
                    <TextField
                        value={texto}
                        onChange={handleTextoChange}
                        label='Texto'
                        color='secondary'
                        size='small'
                        required
                        multiline
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='secondary'
                    >Salvar</Button>
                </Box>

            </CardContent>
        </Card>
    )
}
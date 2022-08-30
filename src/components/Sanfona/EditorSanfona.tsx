import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Card, CardContent, Input, TextField, Typography } from '@mui/material';

import { addItem } from '../../redux/sanfonaSlice';

export default function EditorSanfona() {

    const dispatch = useDispatch()

    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')

    const handleTituloChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setTitulo(event.target.value)
    }
    const handleConteudoChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setConteudo(event.target.value)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault()
        if (titulo && conteudo) {
            const id = Math.random().toString(36).slice(2)
            dispatch(addItem({ id: id, titulo: titulo, conteudo: conteudo + id }))
            setTitulo('')
            setConteudo('')
        }
    }

    return (
        <Card sx={{ my: 3 }}>
            <CardContent>
                <Typography variant='h6' mb={3} align='center'>
                    Formulário de dados
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
                        value={conteudo}
                        onChange={handleConteudoChange}
                        label='Conteudo'
                        color='secondary'
                        size='small'
                        required
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
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ISanfona from "../../interfaces/ISanfona"
import { addItem } from '../../redux/sanfonaSlice';
import { useDispatch } from "react-redux";
import { useState } from "react";

interface props {
    conteudo: ISanfona[]
}

export default function Sanfona( { conteudo }: props ) {

    return (
        <div>
            {conteudo.map((item, index) => (
                <Accordion key={item.id}>
                    <AccordionSummary 
                        sx={{px: 3}}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>{item.titulo}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{px: 3, pb: 4}}>
                        <Typography>{item.conteudo}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export const SanfonaForm = () => {
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
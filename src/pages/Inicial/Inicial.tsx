import { Box, Container, Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Bloco from '../../components/Bloco/Bloco'
import EditorBloco from '../../components/EditorBloco/EditorBloco'
import IDocumento from '../../interfaces/IDocumento'



export default function Inicial() {

    const documento = useSelector<any>((state) => state.documento) as IDocumento
    
    return (
        <>
            <Container maxWidth="md">
                <EditorBloco />
                <div>
                    <Paper sx={{px:6, py:10}}>
                    <Typography variant='h3' sx={{mb: 6}}>{documento.titulo}</Typography>
                        {documento.blocos.map(bloco => (
                            <Bloco key={bloco.id} bloco={bloco} />
                        ))}
                    </Paper>
                </div>
            </Container>
        </>
    )
}
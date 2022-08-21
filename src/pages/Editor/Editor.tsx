import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Sanfona, { SanfonaForm } from '../../components/Sanfona/Sanfona'
import ISanfona from '../../interfaces/ISanfona'




export default function Editor() {
    
    const sanfona = useSelector<any>((state) => state.sanfona.value) as Array<ISanfona>

    return (
        <>
            <Container maxWidth="xl">
                <SanfonaForm />
                <Sanfona conteudo={sanfona} />
            </Container>
        </>
    )
}
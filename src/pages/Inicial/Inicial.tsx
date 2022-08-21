import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Sanfona from '../../components/Sanfona/Sanfona'
import ISanfona from '../../interfaces/ISanfona'



export default function Inicial() {
    
    const sanfona = useSelector<any>((state) => state.sanfona.value) as Array<ISanfona>

    return (
        <>
            <Container maxWidth="lg">
                <Sanfona conteudo={sanfona} />
            </Container>
        </>
    )
}
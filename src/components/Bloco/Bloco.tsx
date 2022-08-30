import { Box, Typography } from "@mui/material";
import IBloco from "../../interfaces/IBloco";

interface props {
    bloco: IBloco
}


export default function Bloco({ bloco }: props) {
    //TODO criar um switch de opcoes para renderizar
    return (
        <>
            <Box sx={{ mb: 3 }}>
                <Typography variant='h4'>{bloco.conteudo.titulo}</Typography>
                <Typography>{bloco.conteudo.texto}</Typography>
            </Box>

        </>
    )
}
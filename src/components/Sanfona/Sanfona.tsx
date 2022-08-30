import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ISanfona from "../../interfaces/ISanfona"

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
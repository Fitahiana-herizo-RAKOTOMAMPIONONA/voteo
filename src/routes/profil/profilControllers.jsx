import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function EvenementComponent({nom,to}){
    return <Box width={"400px"} height={"180px"} borderRadius={"12px"} padding={" 10px 20px"} boxSizing={"border-box"} boxShadow={"0px 0px 5px 2px var(--second)"}>
        <Link to={`/vote/details/${to}`}>
            <Typography>{nom || "Nom scrutin" }</Typography>
        </Link>
    </Box>
}
export { EvenementComponent}
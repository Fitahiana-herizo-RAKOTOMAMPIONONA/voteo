import { Box } from "@mui/material";
import NavBar from "../../components/header/navbar";
import HeadRetour from "../../components/headRetour/headRetour";

function ScrutinSimple(){
    return <Box>
        <NavBar/>
        <HeadRetour nom="Simple scrutin" to={"/solution"}/>

    </Box>
}
export default ScrutinSimple
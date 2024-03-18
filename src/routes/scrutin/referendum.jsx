import { Box } from "@mui/material";
import NavBar from "../../components/header/navbar";
import HeadRetour from "../../components/headRetour/headRetour";

function Referendum(){
    return <Box>
        <NavBar/>
        <HeadRetour nom="Referendum" to={"/solution"}/>
    </Box>
}
export default Referendum
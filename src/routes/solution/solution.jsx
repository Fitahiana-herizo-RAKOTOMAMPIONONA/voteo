import { Box, Button, Typography } from "@mui/material";
import { Component } from "react";
import NavBar from "../../components/header/navbar";
import './solution.css'
import { Link } from "react-router-dom";
import { NavigateNext} from "@mui/icons-material";
import { Description } from "../apropos/aproposControllers";
function SolutionComponent ({nom,to,description,photo}){
    return <Box  width={"400px"} height={"300px"} position={"relative"} borderRadius={"10px"} overflow={"hidden"} > 
        <img src={photo || "/assets/image/acc.jpg"} alt="" srcSet="" className="photoSolutionComponent"/>
        <Box position={"absolute"} top={"0"} left={"0"} className={"maskSolution"} width={"100%"} height={"100%"}  padding={"20px"} boxSizing={"border-box"}>
            <Box position={"absolute"} bottom={"80px"} width={"50%"}> 
                <Typography fontFamily={"unigeo3"} fontSize={"25px"} color={"var(--primary)"} textTransform={"uppercase"} padding={"20px 0px"}>
                    {nom}
                </Typography>
                <Typography fontFamily={"unigeo2"} fontSize={"15px"} color={"var(--primary)"}>
                    {description}
                </Typography>
            </Box>
            <Box className="boutton" position={"absolute"} bottom={"20px"} left={"20px"}>
                <Link to={to}>
                    <Button sx={{ borderRadius:"50px",width:"200px",backgroundColor: "var(--thirst)",color: "var(--primary)",textTransform: "none",position: "relative",}}>
                        <Box className="icone-Envoyer"
                            sx={{backgroundColor: "var(--second)",color: "var(--primary)",borderRadius:"60px",height: "100%",width:"40px",position: "absolute",right:0,top:0,padding:"auto",
                        }}>
                            <NavigateNext sx={{marginTop: "5px"}}/>
                        </Box>
                        <Typography>
                            Demo
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </Box>
    </Box>
}


class Solution extends Component{
    render(){
        return <Box>
                <NavBar/>
                <Box paddingTop={"100px"}>
                    <Description  description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur temporibus repudiandae libero commodi dignissimos saepe numquam, doloremque voluptatem asperiores quae enim, adipisci at tempore accusantium hic odit molestias ex."}/>
                    <Box  display="flex" justifyContent="center" flexWrap="wrap" rowGap="20px" columnGap="20px"
                        sx={{
                            marginTop: "120px",
                            "@media screen and (max-width: 1255px)" : {
                                marginTop: "20px"
                            }
                        }}
                    >
                        <SolutionComponent nom="Scrutin " description="election comme election presidetielle" to="./Scrutin"/>
                        <SolutionComponent nom="Referendum" description="ex :referendum d,un entreprise"  to="./Referendum"/>
                        <SolutionComponent nom="Scrutin Simple" description="ex : Hit Lounge"  to="./Simple"/>
                    </Box>
                </Box>
        </Box>
    }
}
export default Solution
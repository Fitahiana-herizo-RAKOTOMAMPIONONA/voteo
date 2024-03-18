import { Box, Typography } from "@mui/material";
import { Component } from "react";
import NavBar from "../../components/header/navbar";
import './accueil.css'
import Input from "@mui/material/Input";
import { YoutubeSearchedFor } from "@mui/icons-material";
import { Description,SousTitre } from "../apropos/aproposControllers";
import { CardAvantage , CardStat} from "./accueilControllers";
import Footer from "../../components/footer/footer";
import { Badge ,BabyChangingStationOutlined } from "@mui/icons-material";
class Accueil extends Component{
    render(){
        return <Box>
               <NavBar/>
                <Box 
                    // navbar fixe
                    minHeight={"100vh"} paddingTop={"100px"}
                    sx={{maxWidth: "1500px",margin:"auto", 
                    "@media screen and (max-width:1500px)":{
                        marginLeft: "20px",
                        marginRight: "20px",
                    }
                }}>
                    <Box display={"flex"} justifyContent={"center"} gap={"100px"}
                        sx={{
                            "@media screen and (max-width : 600px)":{
                                display: "block"
                            }
                        }}
                    >
                            <Box  margin={"auto"} marginTop={"50px"}>
                                <img src="/assets/image/acc.jpg" alt="" srcSet="" width={"100%"} className="imageAccueil"/>
                            </Box>
                            <Box width={"50%"} margin={"auto"} sx={{"@media screen and (max-width : 600px)":{width:"100%"}}}>
                                <Typography padding={"30px 0px"} position={"relative"} width={"70%"} fontWeight={"900"}  fontSize={"40px"} fontFamily={"unigeo3"} color={"var(--second)"} sx={{"@media screen and (max-width : 600px)":{fontSize:"30px",padding:"0px",width:"100%",paddingTop:"20px"},"@media screen and (max-width : 850px)":{padding:"0px",width:"100%",paddingTop:"20px"}}}>La Solution numérique de vote : <span style={{color: "var(--thirst)"}}>VOTEO</span></Typography>
                                <Typography fontFamily={"unigeo2"} paddingBottom={"20px"}  width={"80%"} fontSize={"20px"} >E-vote est une plateforme de vote en ligne ,numerique et idéale</Typography>
                                <Box display={"flex"} justifyContent={"space-between"} paddingBottom={"100px"}  sx={{"@media screen and (max-width : 600px)":{display: "block"}}}>
                                    <Box position={"relative"}>
                                        <img src="/assets/image/economie.png" alt="" srcSet="" width={"80px"} className="photo1"/>
                                        <img src="/assets/image/fiable.png" alt="" srcSet="" width={"80px"} className="photo2"/>
                                        <img src="./assets/image/fiable.png" alt="" srcSet="" width={"80px"} className="photo3"/>
                                    </Box>
                                    <Box color={"var(--second)"} marginRight={"100px"} sx={{"@media screen and (max-width : 600px)":{marginRight:"2px"}}}>
                                        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} gap={"20px"}>
                                            <Typography fontFamily={"unigeo3"}>Securisée</Typography>
                                            <Box  color="var(--thirst)" >
                                                <Badge />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} gap={"20px"}>
                                            <Typography fontFamily={"unigeo3"}>Rapide</Typography>
                                            <Box  color="var(--thirst)" >
                                                <Badge />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} gap={"20px"}>
                                            <Typography fontFamily={"unigeo3"}>Fiable</Typography>
                                            <Box  color="var(--thirst)" >
                                                <Badge />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} columnGap={"20px"} rowGap={"20px"} marginTop={"50px"} sx={{"@media screen and (max-width : 600px)":{flexWrap: "wrap"}}}>
                        <CardStat style={"#3d5bf06f"} chiffre={"2.544"} nom={"utilisateur"}/>
                        <CardStat style={"#8a5680"} chiffre={"25.404"} nom={"vue"}/>
                        <CardStat style={"#542222ba"} chiffre={"44"} nom={"Satisfaction"}/>
                    </Box>
                </Box>
                <Box minHeight={'100vh'} padding={"20px"} 
                    // backgroundColor={"rgba(42, 142, 165, 0.100)"}
                >   
                    <SousTitre nom={"Pourquoi nous?"}/>
                    <Description description={"il y a des differntes raison pour dire qu'on est ideale pour receptionner un election en ligne , vous pouvez le crée et ainsi le lancé a une date donne pendant date donne. Pourquoi nous , parce que : "}/>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"50px"} height={"100%"} marginTop={"100px"}>
                        <CardAvantage photo={"/assets/image/securise.png"} title={"securisée"} />
                        <CardAvantage photo={"/assets/image/temps.jpg"} title={"Gain du Temps"}/>
                        <CardAvantage photo={"/assets/image/cout.jpg"} title={"cout réduit"}/>
                    </Box>
                </Box>
                {/* <Box minHeight={'100vh'} padding={"20px"}>
                    <SousTitre nom={"Comment creer un srutin?"}/>
                    <Description description={"il y a des differntes raison pour dire qu'on est ideale pour receptionner un election en ligne , vous pouvez le crée et ainsi le lancé a une date donne pendant date donne. Pourquoi nous , parce que : "}/>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"50px"} height={"100%"} marginTop={"100px"}>
                        <CardAvantage photo={"/assets/image/securise.png"} title={"securisée"} />
                        <CardAvantage photo={"/assets/image/temps.jpg"} title={"Gain du Temps"}/>
                        <CardAvantage photo={"/assets/image/cout.jpg"} title={"cout réduit"}/>
                    </Box>
                </Box>  */}
                <Footer/>
        </Box>
    }
}
export default Accueil
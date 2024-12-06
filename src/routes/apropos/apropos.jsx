import { Box, Input, TextareaAutosize, Typography , Button} from "@mui/material";
import NavBar from "../../components/header/navbar";
import Footer from "../../components/footer/footer"
import "./apropos.css"
import { useEffect } from "react";
import { slideINleft,slideINtop,slideInRight } from "../../animation/animation"
import { SousTitre , Temoin,Description, Reseaux,TeamCard} from "./aproposControllers";
import { Facebook, LinkedIn, Send ,Email} from "@mui/icons-material";
export default function Apropos(){
    useEffect(()=>{
        slideINtop(".sousTitre1")
        slideINtop(".sousTitre2")
        slideINtop(".sousTitre3")
        slideINleft(".left1")
        slideInRight(".input1")
        slideInRight(".input2")
        slideInRight(".input3")
    },[])
    return <Box > 
        <NavBar/>
        <Box sx={{
            // NavBar fixe
            paddingTop:"100px",
            maxWidth: "1500px",
            margin:"auto",
            "@media screen and (max-width:1500px)":{
                marginLeft: "20px",
                marginRight: "20px",
            }
        }}>
            <SousTitre nom={"Temoignage"} className={"sousTitre1"}/>  
            <Description description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo fugiat molestiae unde neque maiores ullam, optio commodi adipisci a minus dignissimos tenetur, tempore amet? Vel vitae delectus quia sit?"}/>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={"20px"} >
                <Temoin nom={"herizo"} className="animation"/>
                <Temoin nom={"herizo"} className="animation"/>
                <Temoin nom={"herizo"} className="animation"/>
                <Temoin nom={"herizo"} className="animation"/>
                <Temoin nom={"herizo"} className="animation"/>
                <Temoin nom={"herizo"} className="animation"/>
                <Temoin nom={"herizo"} className="animation"/>
                <Temoin nom={"herizo"} className="animation"/>
            </Box>
            <SousTitre nom={"Contactez nous"} className={"sousTitre2"}/>
            <Description description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo fugiat molestiae unde neque maiores ullam, optio commodi adipisci a minus dignissimos tenetur, tempore amet? Vel vitae delectus quia sit?"}/>
            <Box position={"relative"}>
                <form action="" method="post">
                    <Box display={"flex"} justifyContent={"center"} gap={"40px"}
                          sx={{
                            "@media screen and (max-width: 800px)":{
                                display: "block",
                                margin: "auto",
                            }
                        }}
                    >
                        <Box backgroundColor={"#3d5bf08f"} height={"400px"} width={"40%"} padding={"20px"} borderRadius={"10px"} boxSizing={"border-box"} className="left1"
                            sx={{
                                "@media screen and (max-width: 800px)":{
                                    background:"none",
                                    height: "auto",
                                    width:"100%"
                                }
                            }}
                        >
                            <Typography  textAlign={"center"} fontSize={"18px"} textTransform={"capitalize"} fontFamily={"unigeo3"} color={"var(--primary)"}   sx={{"@media screen and (max-width: 800px)":{ color: "var(--second)"}}}>
                                Réseaux
                            </Typography>
                            <Box
                                 sx={{
                                    "@media screen and (max-width: 800px)":{
                                        display: "flex",
                                        flexWrap:"wrap",
                                        justifyContent: "center",
                                        gap: "20px"
                                    }
                                }}
                            >
                                <Reseaux element={<Email color="var(--primary)"/>} nom="voteo@gmail.com"/>
                                <Reseaux element={<Facebook color="var(--primary)"/>} nom="Voteo"/>
                                <Reseaux element={<LinkedIn color="var(--primary)"/>} nom="voteo.in"/>
                            </Box>
                    
                        </Box>
                        <Box height={"400px"} width={"60%"} padding={"20px"} boxSizing={"border-box"}
                             sx={{
                                "@media screen and (max-width: 800px)":{
                                    background:"none",
                                    height: "auto",
                                    width:"100%"
                            }}}
                        >
                            <Typography textAlign={"center"} fontSize={"18px"} textTransform={"capitalize"} fontFamily={"unigeo3"} color={"var(--second)"}  >
                                ecrit pour nous
                            </Typography>
                            <Input fullWidth placeholder="votre nom" sx={{padding:"4px 10px"}}  className="input1"/>
                            <Input fullWidth placeholder="Email" sx={{padding:"4px 10px"}}className="input2"/>
                            <TextareaAutosize sx={{margin:"20px 0px",width: "100%"}} placeholder="votre message" className="input3"/>
                            <Button fullWidth sx={{margin: "20px 0px" , background: "var(--thirst)" ,color: "var(--primary)"}}>
                                <Send/>
                                envoyer
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
            <SousTitre nom={"Notre team"} className={"sousTitre3"}/>
            <Description description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo fugiat molestiae unde neque maiores ullam, optio commodi adipisci a minus dignissimos tenetur, tempore amet? Vel vitae delectus quia sit?"}/>
            <Box display={"flex"} justifyContent={"center"} gap={"50px"} marginBottom={"100px"} flexWrap={"wrap"}>
                <TeamCard nom={"onja"}/>
                <TeamCard nom={"toky"} photo={"./assets/image/profile.jpg"}/>
                <TeamCard nom={"fata"}/>
                <TeamCard nom={"herizo"}/>
            </Box>
        </Box>
            <Footer/>
        </Box>
}

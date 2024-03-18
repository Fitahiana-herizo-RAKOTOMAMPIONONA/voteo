import { Box, Button, FormControlLabel, IconButton, InputBase, Select, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import NavBar from "../../components/header/navbar";
import HeadRetour from "../../components/headRetour/headRetour";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";  
import {useState } from "react";
import 'react-calendar/dist/Calendar.css'
import Calendar from "react-calendar"
// import {useEffect } from "react";
// import axios from "axios";
import { StyleSousTitre,SousTitreConfig,SousTitreRecap} from "../../components/scrutinControllers/scrutinController";
import { useNavigate } from "react-router-dom";
function ScrutinElection(){
    // const [estPublic, setEstPublic] = useState(false)
    // const [nom, setNom] = useState()
    const [date, setDate] = useState(new Date)
    const [configScrutin, setConfigScrutin]= useState({
        nom: "",
        date: new Date,
        description : "",
        debutTemps: "",
        finTemps: "",
        type:"",
        votantMax:"",
        nombreCandidat:"",
    })
    const navigate = useNavigate();
    const EnvoyerVersLocalStorage = ()=>{
        if( configScrutin.nom &&  configScrutin.date &&  configScrutin.description &&  configScrutin.debutTemps &&  configScrutin.finTemps &&  configScrutin.votantMax && configScrutin.nombreCandidat) {
            localStorage.setItem("configScrutin",JSON.stringify(configScrutin))
            navigate("/solution/scrutin/candidat")
        }else{
            alert("verifiez bien votre formulaire , remplir tous les champs")
        }
    }
    // useEffect(()=>{
    //     const axiosData = async () =>{
    //         try{
    //             const connecte = await axios.get("http://localhost:8081/user/estConnecte")
    //             if (connecte.data.status=== "success"){
    //                 setNom(connecte.data.nom)
    //             }
    //         }catch (e){
    //             console.log("" + e);
    //         }
    //     } 
    //     axiosData()
    // },[])
    return <Box>
        <NavBar/>
        <Box paddingTop={"120px"}>
            <HeadRetour nom="Election loyale" to={"/solution"}/>
            <Box sx={{maxWidth: "1500px",margin:"auto",
                paddingTop:"50px",
                "@media screen and (max-width:1500px)":{
                    marginLeft: "20px",
                    marginRight: "20px",
                }
            }}>
                <form method="get">
                    <Box display={"grid"} gridTemplateColumns={"1fr 2fr 1fr"} columnGap={ "20px"}
                    overflow={"hidden"}
                        sx={{
                            "@media screen and (max-width : 1172px)": {
                                gridTemplateColumns: "1fr",
                                rowGap:"30px"
                            },
                            "@media screen and (max-width : 920px)": {
                                gridTemplateColumns: "1fr",
                                rowGap:"30px"
                            }
                        }}
                    >
                        <Box  border= {"2px solid var(--thirst)"}  borderRadius={"15px"} padding={"20px"} position={"relative"}
                            sx={{
                                "@media screen and (max-width : 920px)": {
                                    gridRow: "200px"    
                                },
                                "@media screen and (max-width : 600px)": {
                                    border: "0",
                                    Height:"500px",
                                    borderRadius: "15px",
                                    padding: "20px",
                                    height:"auto"
                                }
                            }}
                        >
                            <Typography
                                sx={StyleSousTitre}
                            >
                                calendrier
                            </Typography>
                            <Calendar fontFamily="cursive" selectRange
                                onChange={(e)=>{
                                    setDate(e)
                                    console.log(e);
                                }}
                                sx={{
                                    width:"100%",
                                    height:"100%"
                                }}
                            />
                        </Box>
                        <Box border = {"2px solid var(--thirst)"}  borderRadius={"15px"} padding={"20px"}
                            sx={{
                                "@media screen and (max-width : 600px)": {
                                    border: "0",
                                    HeadRetoureight:"500px",
                                    borderRadius: "15px",
                                    padding: "40px",
                                }
                            }}
                        >
                            <Typography
                                sx={StyleSousTitre}
                            >
                                Paramètre
                            </Typography>
                            <SousTitreConfig titre="vos Information"/>
                            <Box sx={{columnGap: "100px"}}>
                                <Input placeholder="Votre nom" fullWidth />
                                <Input placeholder="Votre prenom" />
                                <Input placeholder="Adresse" />
                                <Input placeholder="Telephone" />
                                <Input placeholder="Ville" />
                                <Input placeholder="Cin" type="number" />
                            </Box>
                            <SousTitreConfig titre="Parametre d'election"/>
                            <Box sx={{columnGap: "100px"}}>
                                <Input placeholder="Nom d'election" fullWidth onChange={(e)=> setConfigScrutin({...configScrutin , nom : e.target.value})} />
                                <Input placeholder="Description" fullWidth onChange={(e)=> setConfigScrutin({...configScrutin , description : e.target.value})}/>
                                <input type="time" 
                                    onChange={(e)=>setConfigScrutin({...configScrutin, debutTemps : e.target.value})}
                                    style={{
                                        width: "100%" , 
                                        margin :"4px 0px"
                                    }} 
                                /> <br />
                                <input type="time" 
                                    onChange={(e)=>setConfigScrutin({...configScrutin, finTemps : e.target.value})}
                                    style={{
                                        width: "100%" , 
                                        margin :"4px 0px"
                                    }} 
                                /> <br /> 
                                <Box backgroundColor={"var(--second)"} padding={"3px 10px"} fontFamily={"unigeo3"} color={"var(--primary)"} borderRadius={"5px"} display={" flex"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography fontFamily={"unigeo2"}>Type</Typography>
                                    <FormControlLabel control={<Checkbox />}
                                        label="public"
                                    />
                                </Box>  
                                <Input placeholder="Nombre de candidat" type="number"
                                    onChange={(e)=>setConfigScrutin({...configScrutin, nombreCandidat : e.target.value})} fullWidth
                                />
                               
                                
                                <Input placeholder="Votants Max : ~~" onChange={(e)=>setConfigScrutin({...configScrutin , votantMax : e.target.value})} fullWidth/>
                            </Box>
                        </Box>
                        <Box sx={{
                                justifyContent:" space-betweeen"
                            }}
                        >
                            <Box border={"2px solid var(--thirst)"} minHeight={"500px"} borderRadius={"15px"}  padding={"20px"}
                                sx={{ 
                                    borderBottomLeftRadius:"0px",
                                    "@media screen and (max-width : 600px)": {
                                        borderRadius: "15px",
                                        padding: "40px",
                                        margin:"20px"
                                    }
                                }}
                            >
                                <Typography
                                    sx={StyleSousTitre}
                                >
                                    Resumé
                                </Typography>
                                <SousTitreRecap label="Nom : " configScrutin={configScrutin.nom} />
                                <SousTitreRecap label="date : " configScrutin={configScrutin.date.toString()} />
                                <SousTitreRecap label="type : " configScrutin={configScrutin.type} />
                            </Box>
                            <Button type="submit" onClick={EnvoyerVersLocalStorage} sx={{ marginTop:"50px", display:"flex", justifyContent:"center", columnGap:"20px", width:"100%", background:"var(--thirst)", color:"var(--primary)", height:"50px", borderRadius:"0px", borderBottomRightRadius: "15px" }}>
                                <Send/>
                                <Typography>Valider</Typography>
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    </Box>
}
export default ScrutinElection
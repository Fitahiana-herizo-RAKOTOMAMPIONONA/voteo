import { Box, Typography } from "@mui/material";
import HeadRetour from "../../components/headRetour/headRetour";
import NavBar from "../../components/header/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import { BulletinDeVote } from "./scrutinComponentControllers";


export default function ScrutinComponent(){
    // const [candidat,setCandidat] = useState([])
    const [info, setInfo] = useState({})
    const param =useParams()
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const result = await axios.get(`http://localhost:8081/scrutin/get/${param.id}`)
                setInfo(result.data)
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    }, [param.id])
    console.log(info)
    return <Box>
        <NavBar/>
        <Box paddingTop={"130px"}>
            <HeadRetour nom={info.nomScrutin || "election Presidentielle"} to="/vote"/>
            <Box position={"relative"} width={"100%"} height={"500px"} objectfit={"cover"} marginBottom={"20px"} sx={{"@media screen and (max-width: 1200px)":{height:"auto",}}}>
                <img src={info.pdc || "/assets/image/pdcVote.jpg"} alt="" width="100%" height="100%"/>
            </Box> 
            <Box 
                sx={{
                    padding: "20px",
                }}  
            >
                <Typography textAlign={"center"} fontFamily={"unigeo3"} fontSize={"20px"} >
                    Description
                </Typography>
                <Typography textAlign={"center"} fontFamily={"unigeo3"} padding={"20px"} >
                    {info.description}
                </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} columnGap={"100px"} position={"relative"}
                sx={{ 
                    "@media screen and (max-width: 1200px)":{
                        display: "block",  
                    }
                }}
            >
                <Box width={"30%"} height={"400px"} border={ "2px solid var(--thirst)"} borderRadius={"10px"} padding={"10px"} sx={{  "@media screen and (max-width: 1200px)":{ width: "92%",  height:"200px", margin: "auto", marginBottom: "60px" }, }} >
                    Résumé
                </Box>
                <Box width="60%" height="auto" sx={{ "@media screen and (max-width: 1200px)":{width:"94%" ,margin: "auto"}}}>
                    <BulletinDeVote image="/assets/image/profile.jpg" numero="01" candidat="rahery kely" profession="enseignant" slogan="fihavanana - fihavaozaana - fitiavana"/>
                    <BulletinDeVote image="/assets/image/profile.jpg" numero="02" candidat="fidelis junior" profession="Pilote" slogan="fihavanana - fihavaozaana - fitiavana"/>
                    <BulletinDeVote image="/assets/image/profile.jpg" numero="03" candidat="Andry rajoelina" profession="Dj" slogan="fihavanana - fihavaozaana - fitiavana"/>
                </Box>
            </Box>
            <Footer/>
        </Box>
    </Box>
}
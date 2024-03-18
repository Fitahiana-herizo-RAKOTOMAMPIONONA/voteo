import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { EvenementComponent } from "./profilControllers";
import { useParams } from "react-router-dom";
import useFetch from "../../state/useFetch";
import axios from "axios";
import { useState ,useEffect } from "react";
export default function Profil(){
    const param = useParams()
    const [personne,setPersonne] =useState({})
    useEffect(()=>{
        const fetchData=async () =>{
            try {
                const resultat = await axios.get(`http://localhost:8081/user/getUserId/${param.id}`)
                setPersonne(resultat.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])
    const {data, load ,erreur} = useFetch(`http://localhost:8081/user/getUserScrutinId/${param.id}`)
    console.log(data)
    console.log(personne);
    return <Box>
        <Box position={"relative"} display={"flex"} justifyContent={"center"}>
            <Box flex={"1"} borderRight={"1px solid var(--thirst)"} height={"100vh"} backgroundColor={"var(--thirst)"}>
                <Link to={"/vote"}>
                    <IconButton color="var(--primary)">
                        <ArrowBack fontSize="50px"/>
                    </IconButton>
                </Link>
                <img src="/assets/image/profile.jpg" alt="" srcSet="" width={"100%"}  style={{borderRadius:"50%" ,margin:"20px" ,border: "5px solid var(--primary)"}}/>
                <Box color={"var(--primary)"}>
                    <Typography fontFamily={"nexa1"} textAlign={"center"} padding={"10px 0px"}> {personne.nom}</Typography>
                    <Typography fontFamily={"unigeo2"} textAlign={"center"} padding={"10px 0px"}> {personne.email} </Typography>
                </Box>
            </Box>
            <Box flex={"4"}>
                <Typography alignItems={"center"} textAlign={"center"} fontFamily={"unigeo3"} fontSize={"25px"} color={"var(--second)"} padding={"20px 0px"}>Evenement</Typography>
                <Box padding={"50px"} display={"flex"} flexWrap={"wrap"} gap={"30px"} justifyContent={"center"}>
                    {
                        data.length<1 ? `auccun evenement crée par ${personne.nom}`:
                        data.map((item,index)=>{
                            return  <EvenementComponent nom={item.nomScrutin} to={item.id} key={index}/>
                        })
                    }
                </Box>
            </Box>
        </Box>
    </Box>
}
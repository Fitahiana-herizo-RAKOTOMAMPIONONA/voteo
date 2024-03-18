import { useEffect } from "react";
import { Box,Typography ,IconButton } from "@mui/material";
import "./apropos.css"
import { FormatQuoteSharp } from "@mui/icons-material";
import { slideINtop} from "../../animation/animation"

function SousTitre ({nom}){
    useEffect(()=>{
        // slideINleft(".sousTitre")
        // undeux(".sousTitre")
    },[])
    return <Typography
    className="sousTitre"
        sx={{
            fontFamily:"unigeo2",
            fontWeight:"800",
            fontSize:"30px",
            textAlign: "center",
            textTransform:"capitalize",
            letterSpacing: "3px",
            color: "var(--second)",
            paddingTop: "40px"
        }}
    >
            {nom}
    </Typography>
}

const Temoin = ({img,nom,commentaire}) =>{
    const back = [
        "#3d5bf06f",
        "#8a5680",
        "#656565",
        "#a58484ba",
        "#224054",
        "#542222ba",
        "#5a370cba"
    ]
    const generateurCouleur = ()=>{
        return back[Math.floor(Math.random()*7)]  
    }
    useEffect(()=>{
        slideINtop(".box1")
    })
    return <Box >
        <Box 
            backgroundColor={generateurCouleur()}
            className={"box1"}
            sx={{
            width:"300px",
            height:"400px",
            position:  "relative",
            padding:"4px",
            borderRadius:"10px"
        }}>
            <Box position={"relative"} width={"100%"} height={"300px"}  borderRadius="7px">
                <img src={img || "./assets/image/profile.jpg"} alt="" srcSet="" className="imagePersonne"/>
                <Box position={"absolute"} width={"40px"} height={"40px"} top={"10px"} left={"10px"} margin={"0"} padding={"0"}>
                    <FormatQuoteSharp/>
                </Box>
            </Box>
            <Typography fontFamily={"unigeo3"} fontSize={"20px"} textAlign={"center"}>
                {nom || "Marc Doe"}
            </Typography>
            <Typography fontFamily={"unigeo3"} textAlign={"center"}>
                {commentaire || "une application belle et bien organisé"}
            </Typography>
        </Box>
    </Box>
}

function Description({description}){
    return  <Typography textAlign={"center"} margin={"auto"} width={"800px"} fontFamily={"unigeo3"} padding={"40px 10px"}
        sx={{
            "@media screen and (max-width: 900px)":{
                width: "90%",
            }
        }}
    >
        {description}
    </Typography>
}
function Reseaux({element, nom}){
    return <Box  color={"var(--primary)"} textAlign={"center"} padding={"20px"}
        sx={{
            "@media screen and (max-width: 800px)":{
                width: "120px",
                background: "var(--thirst)",
                borderRadius: "10px",
            }
        }}
    >
         <IconButton>
            {element}
        </IconButton>
        <Typography>
            {nom}
        </Typography>
    </Box>
}

const TeamCard=({photo, nom,profession ,classy})=>{
    return <Box width={"200px"} height={"200px"} paddingBottom={"50px"} className={classy} >
        <img src={photo || `./assets/image/${nom}.jpg` || "./assets/image/profile.jpg"} alt="" srcSet="" width={"100%"} height={"100%"} className="pdpTeam"/>
        <Typography textAlign={"center"} fontFamily={"nexa1"} margin={"10px 0px"} color={"var(--second)"}>
            {nom || "Nom et prenom"}
        </Typography>
        <Typography textAlign={"center"} fontFamily={"unigeo3"} margin={"20px 0px"} color={"#7f7f7f"}>
            {profession || "Full-Stack JS"}
        </Typography>
    </Box>
}

export {SousTitre ,Temoin ,Description,Reseaux,TeamCard}
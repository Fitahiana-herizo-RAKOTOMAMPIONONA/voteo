import { Box,IconButton,Input,Typography } from "@mui/material"
import { AccountBox ,SwitchAccount ,AddAPhoto ,AddAPhotoOutlined, Close} from "@mui/icons-material"
import { useState } from "react"
import "./scrutincontollers.module.css"
function CandidatCard ({index , handleChangeCandidat}){
    const [selectedImage,setSelectedImage] =useState(null)
    const handleImageChange = (event) =>{
        const file = event.target.files[0]
        if (file)  setSelectedImage(URL.createObjectURL(file))
        console.log(selectedImage);
        handleChangeCandidat(selectedImage, index , "pdp")
    }
    return <Box maxWidth={"700px"} height={"250px"} border={"var(--second) solid 2px"} position={"relative"}  borderRadius={"10px"} margin={"auto"} marginBottom={"30px"} display={"flex"}>
         <Box flex={"1"} position={"relative"} padding={"20px"}>
            {
                selectedImage ? (
                    <Box>
                        <img src={selectedImage} alt="Selected" style={{width:"200px", position: "relative",height : "200px" ,objectFit:"cover"}}/>
                        <IconButton component={"label"} onClick={()=> {setSelectedImage(null)}} style={{zIndex:5 ,position: "absolute", top: "10px" ,right: "10px" ,backgroundColor: "white"}} >
                            <Close/>
                        </IconButton> 
                    </Box>
                )   :   (
                    <IconButton component={"label"} >
                        <Input
                            type="file"
                            accept="image/*"
                            style={{display: "none"}}
                            onChange={handleImageChange}
                        />
                         <AddAPhotoOutlined sx={{ fontSize:"50px" }} style={{margin: "auto"}}/>
                    </IconButton>
                )
            }
        </Box>
        <Box  flex={"3"} padding={"20px"} className="infoCandidat">
            <Input type="text" placeholder="Nom" fullWidth onChange={(e) => handleChangeCandidat(e , index , "nom")}/>
            <Input  type="text" placeholder="Prenom" fullWidth onChange={(e) => handleChangeCandidat(e , index , "prenom")}/>
            <Input  type="date" fullWidth style={{color:"#b1b1b1"}} onChange={(e) => handleChangeCandidat(e , index , "date")}/>
            <Input type="text" placeholder="Profession" fullWidth onChange={(e) => handleChangeCandidat(e , index , "profession")}/>
        </Box>
    </Box>
}
function SousTitreConfig ({titre}){
    return <Typography letterSpacing="3px" fontWeight="10px" margin="5px 0px" color="var(--second)"
        sx={{
            "@media screen and (max-width : 600px)": {
                marginLeft: "-15px"
            }
        }}
    >
        {titre}
    </Typography>
}

function SousTitreRecap ({label,configScrutin}){
    return <Box display={ "flex"} alignItems={"center"}
    sx={{ 
    }}>
        <Typography color="var(--second)" textTransform="capitalize">{label} </Typography>
        <Typography fontWeight="700">
            { 
                configScrutin || "votre nom scrutin"
            }
        </Typography>
    </Box>
}
const StyleSousTitre={
    color: "var(--thirst)",
    fontWeight: "900",
    fontFamily: "cursive",
    fontSize: "20px",
    textAlign: "center",
    textTransform :"capitalize",
    marginBottom: "10px"
}
export {CandidatCard,SousTitreConfig,SousTitreRecap ,StyleSousTitre}
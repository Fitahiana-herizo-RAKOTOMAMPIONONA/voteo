import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { dataNavBar } from "../../data/navbar";
import { NavListe } from "../header/navbar";
import { Email, FacebookOutlined, Instagram, LinkedIn } from "@mui/icons-material";
function Footer () {
  const [now,setNow]= useState(Date)
  setInterval(() => {
        setNow(Date)
  },100000);
  return (
   <Box borderTop={"2px solid var(--second)"} padding={"30px"}>
        <Typography fontSize={"30px"} margin={"auto"} fontFamily={"nexa1"} color={"var(--second)"} flex={"1"} textAlign={"center"}>
            Voteo
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {dataNavBar.map((item,index)=>{
                return <NavListe item={item.nom} to={item.chemin} key={index}/>
            })}
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton>
                <FacebookOutlined color="var(--second)" fontSize="20px"/>
            </IconButton>
            <IconButton>
                <LinkedIn color="var(--second)"/>
            </IconButton>
            <IconButton>
                <Instagram color="var(--second)"/>
            </IconButton>
            <IconButton>
                <Email color="var(--second)"/>
            </IconButton>
        </Box>
        <Typography textAlign={"center"} color={"#7f7f7f"}>copyright @{now.toString()}</Typography>
   </Box>
  );
}

export default Footer;

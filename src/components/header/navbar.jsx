import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { FacebookOutlined, Instagram, Menu, NotificationImportantOutlined, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { dataNavBar } from "../../data/navbar";
import "./navbar.css";

export function NavListe({ item, to }) {
  return ( <Box>
      <Typography
      sx={{
        marginLeft: "20px",
        cursor: "pointer",
        // color: "var(--primary)",
        fontFamily : "unigeo3",
        borderBottom: "3px solid transparent",
        rowGap: "50px",
        ":hover":{
          paddingBottom: "0",
          borderBottom: "3px solid",
          borderRadius:"3px",
        }
      }}
    >
      <Link to={to} sx={{textDecoration:"none", color: "var(--primary)"}}>
        {item}
      </Link>
    </Typography>
  </Box>
);
}

function NavBar() {
  const [connecte,setConnecte] = useState(false)
  const [nom,setNom] = useState(null)
  const [pdp,setPdp] =useState(false)
  const [now,setNow]= useState(Date)
  const [time,setTime]=useState(new Date)
  const x = document.querySelector('.deroulant')
  const y = document.querySelector('.listeNav')
  useEffect(()=>{
    const intervalleTime = setInterval(()=>{
        setTime(new Date)
    },1000)
    return ()=> clearInterval(intervalleTime) 
  },[])
  setInterval(()=>{
    setNow(Date().toString())
  },1000)
  axios.defaults.withCredentials = true
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8081/user/estConnecte");
                if (response.data.status=== "success"){
                    setConnecte(true)
                    setPdp(false)
                    setNom(response.data.nom)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
  const rideau = () =>{
    document.querySelector('.deroulant').classList.toggle('active');
    document.querySelector('.listeNav').classList.toggle('active');
  }
  return (
    <Box
      sx={{
        // navbar fixe 
        position: "fixed",
        background: "var(--primary)",
        paddingTop: "5px",
        zIndex:"4",
        width:"1400px",
        "@media screen and (max-width:1400px)":{
          width: "100%",
        }
        }}
    >
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} paddingBottom={"5px"}>
        <Box flex={"1"} gap={"5px"} className="reseauNavBar">
          <IconButton> <FacebookOutlined/> </IconButton>
          <IconButton> <Instagram/></IconButton>
          <IconButton> <Twitter/></IconButton>
        </Box>
        <Box flex={"1"} textAlign={"center"} sx={{
          "@media screen and (max-width: 600px)":{
            textAlign: "left",
            marginLeft:"10px"
          }
        }}>
          <Typography fontFamily="nexa1" color="var(--second)">
            Voteo {innerWidth}
          </Typography>
        </Box>
        <Box sx={{flex: 1}}>
            {connecte ? (
              <Box display="flex" justifyContent="end">
                <IconButton>
                  <NotificationImportantOutlined />
                </IconButton>
                  {
                    pdp || nom===null ? (
                      <IconButton> 
                        <img
                          src="./assets/image/profile.jpg"
                          alt=""
                          className="imagePhotoProfil"
                          /> 
                      </IconButton>
                    ) : (
                      <IconButton 
                      sx={{
                        backgroundColor: "var(--thirst)",
                        padding: "0px 15px"
                      }}
                      >
                        <Typography
                          fontWeight="900"
                        >
                          {nom[0]}
                        </Typography>
                    </IconButton>
                  )
                }             
            </Box>
      ) : (
            <Box display="flex" justifyContent="end">
              <Link to="/signUp">
                <Button
                  sx={{
                    backgroundColor: "var(--thirst)",
                    color: "white",
                    padding: "5px 15px",
                    marginRight: "20px",
                    textTransform: "capitalize"
                  }}
                  >
                  S'inscrire
                </Button>
              </Link>
              <Link to="/signIn">
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "var(--second)",
                      padding: "5px 15px",
                      textTransform: "capitalize"
                    }}
                  >
                    Se connecter
                  </Button>
              </Link>
              {nom}
              </Box>
        )}
        </Box>
      </Box>
      <Box className="deroulant">
          <Box>
            <ul className="listeNav">
              {dataNavBar.map((item, index) => (
                <NavListe item={item.nom} to={item.chemin} key={index} />
              ))}
            </ul>
          </Box>
          <Box>
            {/* {time} */}
            {/* {now.getHours()} */}
          </Box>
          {
            innerWidth < 600 ? 
            <Box className="bouttonMenu">
                <IconButton onClick={rideau}><Menu/></IconButton>
            </Box> : null
          }
      </Box>
    </Box>
  );
}

export default NavBar;

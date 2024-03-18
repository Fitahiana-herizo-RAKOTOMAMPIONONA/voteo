import {AccountCircleRounded} from "@mui/icons-material";
import { Save } from "@mui/icons-material";
import { Box ,Button,IconButton,Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function VoteComponent ({logo,nom,description,type,votant,statVotant,date,couverture,to,user,idUser}){
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
    return <Box sx={{ 
                width: "380px", 
                height:"400px", 
                boxShadow: "1px 3px 5px var(--thirst)",  
                borderRadius: "10px",
                boxSizing: "border-box",
                position: "relative", 
                overflow:"hidden", 
                cursor: "pointer",
                padding:"4px",
                backgroundColor: "var(--primary)",
                "@media screen and (max-width: 1485px)":{
                    width:"320px",
                    height:"350px"
                },
                "@media screen and (max-width: 872px)":{
                    width:"250px",
                    height:"280px"
                }
            }}> 
        <Box
            backgroundColor={generateurCouleur()}
            sx={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                padding:"10px",
                height:"80%"
            }}
        >
            <Box 
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "var(--primary)",
                    textTransform:"capitalize"
                }}
            >
                <Typography 
                    fontWeight="600"
                >
                    {type || "public"}
                </Typography>
                <IconButton>
                    <Save/>
                </IconButton>
            </Box>
            <Box
                sx={{
                    // height:"100%"
                }}
            >
                <Typography 
                margin="30px 0px"
                    textTransform="Capitalize"
                    color="var(--primary)"
                    fontSize="40px"
                    fontFamily="cursive"
                    fontWeight="500"
                    sx={{
                        "@media screen and (max-width: 872px)":{
                            fontSize:"20px"
                        }
                    }}
                >
                    {nom}
                </Typography>
            </Box>
        </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height:"50px",
                    position: "absolute",
                    bottom:"0",
                    color:"var(--second)"
                }}
            >
                <Link to={`/profil/${idUser}`} style={{display: "flex",justifyContent: "start",alignItems:"center"}}>
                    <>
                        {
                            logo!==undefined ? (
                                <img src={logo} alt="" srcSet="" width="30px" height="30px"/>
                                ):(
                                <AccountCircleRounded/>
                            )
                        }
                    </>
                    <Typography
                        textAlign="left"
                        fontWeight="600"
                        sx={{
                            flex:1,
                            paddingLeft:"20px",
                            lineHeight:"50px"
                        }}
                        >
                        {user || "anonyme"}
                    </Typography>   
                </Link>
                <Link to={`/vote/details/${to}`}>
                    <Button 
                        sx={{
                            backgroundColor: "var(--thirst)",
                            marginRight:"10px",
                            borderRadius:"1px",
                            borderBottomRightRadius: "8px",
                            color: "var(--primary)",
                            textTransform: "capitalize",
                            "@media screen and (max-width: 872px)":{
                                fontSize:"12"
                            }
                    }}>
                        view
                    </Button>
                </Link>
            </Box>
    </Box>
}

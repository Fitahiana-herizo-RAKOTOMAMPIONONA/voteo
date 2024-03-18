import { Box ,Button,Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

// const BulletinDeVote = ({image,numero,candidat,profession,slogan}) =>{
//     return <Box
//         sx={{
//             width:"100%",
//             height:"200px",
//             border: "2px solid var(--thirst)",
//             borderRadius:"10px",
//             display: "grid",
//             marginBottom:"50px",
//             gridTemplateColumns: "2fr 2fr 4fr 1fr",
//             overflow: "none",
//             "@media screen and (max-width: 1200px)":{
//                 borderRadius:"4px",
//                 width:"94%" ,
//                 margin: "auto",
//                 height:"150px",
//                 marginBottom:"50px",
//                 gridTemplateColumns: "2fr 2fr 4fr 1fr",
//             },
//             "@media screen and (max-width: 900px)":{
//                 borderRadius:"4px",
//                 width:"94%" ,
//                 margin: "auto",
//                 height:"150px",
//                 marginBottom:"50px",
//                 gridTemplateColumns: "2fr 2fr 4fr 1fr",
//             },
//             "@media screen and (max-width: 600px)":{
//                 marginBottom:"20px",
//                 height:"120px",
//             }
//         }}  
//     >
//         <Box
//             sx={{
//                 position:"relative",
//                 borderRight:"var(--thirst) solid 1px",
//                 overflow: "hidden"
//             }}
//         >
//             <img src={image} alt="" srcSet="" width="100%" height="100%" className="pdp" />
//         </Box>
//         <Box
//             sx={{
//                 borderRight:"var(--thirst) solid 1px",
//                 overflowY: "hidden",
//             }}
//         >
//             <Typography sx={{
//                 fontSize: "100px",
//                 padding:"30px 0px",
//                 textAlign: "center",
//                 "@media screen and (max-width: 900px)":{
//                     fontSize: "25px"
//                 }
//             }}>{numero}</Typography>
//         </Box>
//         <Box
//             sx={{
//                 padding:"30px 10px",
//                 borderRight:"var(--thirst) solid 1px",
//                 overflowY: "auto",
//                 margin: "auto",
//                 "@media screen and (max-width: 900px)":{
//                     margin: "auto",
//                     padding:"auto",
//                 },
//                 "@media screen and (max-width: 600px)":{
//                     margin: "auto",
//                     padding:"auto",
//                     padding:"10px 10px",
//                 }
//             }}
//         >
//             <Typography sx={{
//                 fontSize: "30px",
//                 fontWeight: "800",
//                 color:"var(--second)",
//                 textTransform:"capitalize",
//                 padding:"10px 0px",
//                 "@media screen  and (max-width : 800px)":{
//                     padding:"4px 0px",
//                     fontSize: "18px"
//                 },
//                 "@media screen  and (max-width : 600px)":{
//                     padding:"1px 0px",
//                     fontSize: "16px"
//                 },
//             }}>{candidat}</Typography>
//             <Typography sx={{
//                 fontSize: "20px",
//                 fontWeight: "100",
//                 color:"var(--four)",
//                 "@media screen  and (max-width : 800px)":{
//                     fontSize: "15px"
//                 },
//                 "@media screen  and (max-width : 600px)":{
//                     fontSize: "12px"
//                 },
//             }}>{profession}</Typography>
//             <Typography sx={{
//                 fontSize: "15px",
//                 fontWeight: "100",
//                 fontStyle: "italic",
//                 color:"var(--four)",
//                 "@media screen  and (max-width : 800px)":{
//                     fontSize: "13px"
//                 },
//                 "@media screen  and (max-width : 600px)":{
//                     fontSize: "12px"
//                 },
//             }}>{slogan}</Typography>
//         </Box>
//         <Box
//             sx={{
//                 "@media screen and (max-width: 900px)":{
//                     margin: "auto"
//                 }
//             }}
//         >
//             <Checkbox sx={{
//                 width:"100px",
//                 height:"100px",
//                 // padding:"20px",
//                 margin: "auto",
//                 "@media screen and (max-width: 900px)":{
//                     width: "100px",
//                     height: "100px"
//                 }
//             }}/>
//         </Box>
//     </Box>
// }
const Cadre = (stat) =>{
    return <Box padding={"5px"} boxSizing={"border-box"} width={"50px"}height={"50px"} >
        {stat || "254 j"}
    </Box>
}
const BulletinDeVote = ({image,numero,candidat,profession,slogan}) =>{
    const [votant,setVotant]=useState(5)
    return <Box padding={"20px"} boxSizing={"border-box"} display={"flex"} width={"100%"} height={"300px"} boxShadow={"2px 2px 5px var(--second)"} margin={"20px 0px"}
        sx={{
            "@media screen and (max-width : 600px )":{
                padding:"5px",
                height: "100px"
            }
        }}
    >
        <Box flex={"1"}>
            <img src={image} alt="" srcSet="" width="100%" height="100%" className="pdp"/>
        </Box>
        <Box padding={"10px 20px"} width={"60%"} position={"relative"}>
            <Box  display={"flex"} position={"relative"} >
                <Box flex={"3"}>
                    <Typography fontFamily={"unigeo3"} fontSize={"30px"} textTransform={"uppercase"} color={"var(--second)"} sx={{ "@media screen and (max-width : 600px )":{ fontSize: "18px" } }} >{candidat}</Typography>
                    <Typography fontFamily={"unigeo2"} fontSize={"17px"} textTransform={"capitalize"} color={"var(--second)"} sx={{"@media screen and (max-width : 600px )":{fontSize: "12px"}}}>{profession}</Typography>
                </Box>
                <Box flex={"1"}>
                    <Typography fontFamily={"cursive"} fontSize={"45px"} textTransform={"uppercase"} color={"var(--second)"} textAlign={"end"} sx={{"@media screen and (max-width : 600px )":{fontSize: "20px"}}}>{numero}</Typography>
                </Box>
            </Box>
            <Box display={"flex"} marginTop={"10px"} gap={"20px"} flexWrap={"wrap"}>
                <Box width={"50px"} height={"50px"} padding={"10px"} position={"relative"} backgroundColor = {"#656565"} borderRadius={"5px"}>
                    <img src="/assets/image/prix-le-plus-bas.png" alt="" width={"100%"} style={{objectFit: "cover"}}/>
                </Box>
                <Box width={"100px"} height={"50px"} padding={"10px"} position={"relative"} backgroundColor = {"#a58484ba"}  borderRadius={"5px"}>
                    <Typography>{votant} votant(s)</Typography>
                </Box>
            </Box>
            <Box display={"flex"} position={"absolute"} bottom={"0"} justifyContent={"flex-end"}>
                <Button>voir CV</Button>
                <Button
                    onClick={()=>{setVotant(votant+1)}}
                >votez</Button>
            </Box>
        </Box>
    </Box>
}


export { BulletinDeVote}
import { Box, Typography } from "@mui/material";

function CardAvantage({title,photo,description}){
    return <Box border={"2px var(--thirst) solid"} height={"500px"} width={"350px"} position={"relative"} sx={{boxSizing:"border-box","@media screen and (max-width : 600px)":{width:"200px",height:"auto"}}} padding={"20px"}>
        <Typography fontFamily={"unigeo3"} color={"var(--second)"} textAlign={"center"} textTransform={"capitalize"} fontSize={"25px"} sx={{"@media screen and (max-width : 600px)":{fontSize:"18px"}}}>
            {title}
        </Typography>
        <img src={photo} alt="" srcSet="" height={"100%"} className="imageAvantage"/>
        <Typography fontFamily={"unigeo2"} color={"var(--second)"} textAlign={"center"}  sx={{"@media screen and (max-width : 600px)":{fontSize:"12px"}}}>
            {description || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias harum praesentium nemo? Minus veritatis sit dolorum nobis perferendis pariatur assumenda a facilis aliquam voluptates repellendus natus officiis velit, ducimus delectus!" }
            
        </Typography>
    </Box>
}
function CardStat({style,chiffre,nom}){
    return <Box backgroundColor={style} width={"200px"} height={"100px"} borderRadius={"10px"} padding={"15px"} boxSizing={"border-box"} sx={{"@media screen and (max-width : 600px)":{width: "120px", height:"60px",padding:"2px" }}}>
        <Box 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"20px"}
            sx={{"@media screen and (max-width : 600px)":{gap: "10px"}}}
        >
            <Box>
                <span style={{fontFamily: "cursive" , fontSize: "45px"}}>+ </span>
            </Box>
            <Box>
                <Typography fontFamily={"nexa1"}>  {chiffre} </Typography>
                <Typography fontFamily={"unigeo3"}> {nom}</Typography>
            </Box>
        </Box>
    </Box>
}
export {CardAvantage,CardStat}

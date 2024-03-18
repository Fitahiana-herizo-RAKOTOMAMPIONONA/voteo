import { Box, Input } from "@mui/material";
import { useState } from "react";
import NavBar from "../../components/header/navbar";
import './vote.css'
import VoteComponent from "../../components/voteComponent/voteComponent";
import Footer from "../../components/footer/footer";
import useFetch from "../../state/useFetch";
import { Search } from "@mui/icons-material";
import { Description } from "../apropos/aproposControllers";
function Vote () {
        const {data,load, erreur} = useFetch("http://localhost:8081/scrutin/user")
        console.log(load,erreur);
        const [query,setQuery] = useState("")
        const FiltrerParNom = (query) =>{
            return data.filter((element)=>{
                if(element.nomScrutin.toLowerCase().includes(query.toLowerCase()) /* || element.description.toLowerCase().includes(query.toLowerCase())*/) 
                    return element 
                else return null
            })
        }
        return <Box>
            <NavBar/>    
            <Box width={"100%"} borderRadius={"10px"} height={"50px"} display={"flex"} justifyContent={"center"} alignItems={"center"} padding={"5px"} paddingTop={"100px"}>
                <Input placeholder="chercher"
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                />
                <Search/>
            </Box>
            <Description  description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur temporibus repudiandae libero commodi dignissimos saepe numquam, doloremque voluptatem asperiores quae enim, adipisci at tempore accusantium hic odit molestias ex."}/>
            <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} marginBottom={"100px"} gap={"15px"} maxWidth={"1500px"} margin={"auto"}
                sx={{
                    "@media screen and (max-width:1500px)":{
                        marginLeft: "20px",
                        marginRight: "20px",
                    }
                }}
            >
                {
                    FiltrerParNom(query).map((value, index)=>{
                        return<VoteComponent
                                    key={index}
                                    nom={value.nomScrutin}
                                    description={value.description}
                                    type={value.type}
                                    votant={value.votantMax}
                                    statVotant={value.statistiqueVotants}
                                    date={value.date}
                                    to={value.id}
                                    user={value.nom}
                                    idUser={value.idUser}
                                />
                    })
                }
            </Box>
            <Footer/>
        </Box>
}
export default Vote
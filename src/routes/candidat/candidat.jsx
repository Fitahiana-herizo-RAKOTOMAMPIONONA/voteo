import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { CandidatCard } from "../../components/scrutinControllers/scrutinController";
import axios from "axios";
import {Button} from "@mui/material"

function CandidatPage(){
    const [configScrutin, setConfigScrutin]= useState({
        nom: "",
        date: new Date,
        description : "",
        debutTemps: "",
        finTemps: "",
        type:"",
        votantMax:"",
        nombreCandidat:"",
    })
    useEffect(()=>{
        if(localStorage.getItem("configScrutin")){
            setConfigScrutin(JSON.parse(localStorage.getItem("configScrutin")))
            // localStorage.removeItem("configScrutin")
        }
    },[])
    const [candidat,setCandidat]=useState(Array.from({length : configScrutin.nombreCandidat},(  )=>({pdp :"", nom: "",prenom: "",date : "" , profession :""})))
    console.log(configScrutin);
    const EnvoyerRequette =async ()=>{
        try{
            const response = await axios.post("http://localhost:8081/scrutin/creer",configScrutin)
            const responseCandidat = await axios.post("http://localhost:8081/candidat/ajouter",candidat)

            if (response.data.status === "success") alert("scrutin bien enregistre")
            if (responseCandidat.data.status === "success") alert("Candidat bien enregistre")
            else alert("erreur lors de l'enregistrement candidat")
        }catch (e){
            console.log(e)
        }
    }
    /*const handleChangeCandidat = (e,index,field)=>{
        if ( field !="pdp"){
            console.log(e.target.value, "index : " +index + " field : " +field);
            const newCandidat = [...candidat]
            newCandidat[index][field]= e.target.value
            setCandidat(newCandidat)
        }else{
            console.log(e, "index : " +index + " field : " +field);
            const newCandidat = [...candidat]
            newCandidat[index][field]= e.target.value
            setCandidat(newCandidat)
        }
    }*/
    const handleChangeCandidat = (e, index, field) => {
        const newCandidats = [...candidat];
        newCandidats[index] = { ...newCandidats[index], [field]: e.target.value };
        setCandidat(newCandidats);
    };
    return <Box>
        <Box display={"block"} margin={"auto"}>
            {
                Array.from({length: configScrutin.nombreCandidat>2 ? configScrutin.nombreCandidat : 2} , (item,index)=>{
                    return   <CandidatCard key={++index} handleChangeCandidat={handleChangeCandidat} index={index}/> 
                })
            }
            <Button type="submit" onClick={EnvoyerRequette} sx={{width:"100%", backgroundColor:"blue"}}>soummettre</Button>
        </Box>
    </Box>
}
export default CandidatPage
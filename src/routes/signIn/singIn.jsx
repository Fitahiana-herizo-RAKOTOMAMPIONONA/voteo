import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SkipPrevious ,ArrowBack ,ArrowBackIos ,ArrowBackOutlined} from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signIn.css"



function SignIn() {
  const [values, setValues] = useState({
    email: "",
    motDePasse: "",
  });

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const EnvoyerRequete = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8081/user/verifier", values);
        if (response.data.success === "success") navigate('/');
    } catch (error) {
        console.error("Erreur lors de la requête:", error.message);
    }
  };

  return (
    <Box width="100%" position="relative">
      <Typography fontWeight="bold" fontSize="20px" fontFamily={"unigeo3"} color={"var(--second)"}>
            Voteo
        </Typography>
      <Box display={"flex"} justifyContent={"center"} marginTop={"100px"} sx={{"@media screen and (max-width: 600px)":{marginTop: "10px"}}}>
        <form onSubmit={EnvoyerRequete}>
          <Box>
            <IconButton>
              <ArrowBack sx={{color: "var(--second)",fontWeight: "900"}}/>
          </IconButton>
            <Box border={"2px var(--thirst) solid"} borderRadius={"30px"} width={"400px"} padding={"50px"}
              sx={{ 
                '@media screen and (max-width: 600px)': {
                  border: 0,
                  width: "100%",
                  padding: 0,
                },
              }}
            >
              <Typography  textAlign={"center"} fontFamily={"cursive"} color={"var(--second)"} fontWeight={"bold"} fontSize={"30px"}>
                Se connecter
              </Typography>
              <Typography>E-mail</Typography>
              <input type="email" name="email" id="email" className="champInput"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />

              <Typography>Mot de passe</Typography>
              <input type="password" name="motDePasse" id="motDePasse" className="champInput"
                onChange={(e) => setValues({ ...values, motDePasse: e.target.value })}
              />

              <Typography textAlign="center" fontSize="15px">
                Mot de passe oublié?
              </Typography>

              <Button
                type="submit"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "var(--thirst)",
                  color: "var(--primary)",
                  margin: "20px 0px",
                }}
              >
                Connexion
              </Button>
              <Link to="/signUp">
                <Button
                  sx={{width: "100%",textAlign: "center",border: "1px solid var(--thirst)",alignItems: "center",margin: "20px 0px"}}
                >
                  Créer un compte
                </Button>
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default SignIn;

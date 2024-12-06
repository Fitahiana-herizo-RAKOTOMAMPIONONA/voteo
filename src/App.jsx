
import './App.css';
import {Route , Routes , BrowserRouter} from "react-router-dom"
import Accueil from './routes/accueil/accueil';
import Solution from './routes/solution/solution';
import Vote from './routes/vote/vote';
import Apropos from './routes/apropos/apropos';
import SignUP from './routes/signUP/signUP';
import SignIn from './routes/signIn/singIn';
import Regle from './routes/regle/regle';
import ScrutinElection from './routes/scrutin/scrutinElection';
import ScrutinSimple from './routes/scrutin/scrutinSimple';
import Referendum from './routes/scrutin/referendum';
import { Box } from '@mui/material';
import ScrutinComponent from './routes/scrutinComponennt/scrutinComponent';
import Profil from './routes/profil/profil';
import CandidatPage from './routes/candidat/candidat';
import HomeAdmin from './admin/accueil/accueil';
function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Accueil/>} path='/'/>
          <Route element={<Solution/>} path='/Solution'/>
          <Route element={<Vote/>} path='/vote'/>
          <Route element={<ScrutinComponent/>} path='/vote/details/:id'/>
          <Route element={<ScrutinComponent/>} path='/test'/>
          <Route element={<Apropos/>} path='/apropos'/>
          <Route element={<SignUP/>} path='/signUp'/>
          <Route element={<SignIn/>} path='/signIn'/>
          <Route element={<Regle/>} path='/regle'/>
          <Route element={<ScrutinElection/>} path='/Solution/Scrutin'/>  
          <Route element={<CandidatPage/>} path='/Solution/Scrutin/candidat'/>  
          <Route element={<ScrutinSimple/>} path='/Solution/Simple'/>
          <Route element={<Referendum/>} path='/Solution/Referendum'/>
          <Route element={<Profil/>} path='/Profil/:id'/>
          <Route element={<HomeAdmin/>} path='/admin/accueil'/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
export default App;


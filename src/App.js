import Hero from './component/Hero';
//import LeftSection from './component/LeftSection';
import SignUp from './component/SignUp';
import './component/styles/App.css';
import { Grid } from '@mui/material';
//import Logo from './component/Images/logo.svg';
//import SignUp from './component/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Stack > */}
        <Grid container className='hello'>
          <Grid className='left-section' item xs={12} md={8}  justifyContent={'center'} alignItems={'center'}>
          <Hero/>
          {/* <LeftSection/> */}
          </Grid>
          <Grid item xs={12} md={4} order={1}>
            <SignUp/>
          </Grid>
        </Grid>
      {/* </Stack> */}
    </div>
  );
}
export default App;

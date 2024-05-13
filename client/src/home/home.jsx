import Categories from "./categories";
import Banner from "../components/banner/banner";
import {Grid} from '@mui/material';
const Home = () =>{
    return (
        <>
            <Banner/>
            <Grid container> 
                <Grid item lg={2} sm={2} xs={12}>
                <Categories/>
                </Grid>

                <Grid item lg={10} sm={10} xs={12}>
                posts
                </Grid>
            </Grid>
        </>
        
    )
}

export default Home;
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Grid from '@mui/material/Grid';
// import './style.css';

export default function CustomizedInputBase() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4} >
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '750px',
                        height: '27px'
                    }}
                > <IconButton  style={{ color: '#BEBDBD'}} type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Wep Designer"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton style={{ color: '#BEBDBD' }} type="button" sx={{ p: '10px' }} aria-label="search">
                        <LocationOnIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Casablanca"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Button
                        sx={{ height: '35px', backgroundColor: '#00B73A' }}
                        variant="outlined"
                        startIcon={<SearchIcon style={{ color: 'white' }} />}
                    >
                    </Button>


                </Paper>


            </Grid>

        </Grid>

    );
}

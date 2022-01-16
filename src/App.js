import React from 'react'
import { CssBaseline, Grid}  from '@material-ui/core';

import Header from './Comopnents/Header/Header';
import List from './Comopnents/List/List'
import Map from './Comopnents/Map/Map'
import PlaceDetails from './Comopnents/PlaceDetails/PlaceDetails'


function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Map />
                </Grid>
            </Grid>
        </>
    )
}

export default App



import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { GoogleMap,Marker, useLoadScript  } from '@react-google-maps/api'
import classes from './MapView.module.css'
import {marker} from "../../public/images/marker.png"
const MapView = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey:"AIzaSyBRw--ukD1qmeQ_S6eyNkUWzns6chzSejo"
    })
    const center = useMemo(() => ({lat:20.3544919, lng:85.816383}), [])
    if(!isLoaded){
        return <div className={classes.loading}><h1>Loading...</h1></div>
    }
     return <GoogleMap zoom={17} center={center} mapContainerClassName={`${classes.mapview} ${classes.maphove}`} >
        <Marker position={{lat:20.3544919, lng:85.816383}}/>
     </GoogleMap> 
}

export default MapView
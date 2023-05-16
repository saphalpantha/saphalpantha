import React, { Fragment, useEffect } from 'react'
import { useMemo } from 'react'
import { GoogleMap,Marker, useLoadScript  } from '@react-google-maps/api'
import classes from './MapView.module.css'
import {marker} from "../../public/images/marker.png"
const MapView = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey:"AIzaSyBRw--ukD1qmeQ_S6eyNkUWzns6chzSejo"
    })
    const center = useMemo(() => ({lat:27.679886, lng:83.458038}), [])
    if(!isLoaded){
        return <div className={classes.loading}><h1>Loading...</h1></div>
    }
     return <div>

     <GoogleMap zoom={17} center={center} mapContainerClassName={`${classes.mapview} ${classes.maphove}`}  >
        <Marker position={{lat:27.679886, lng:83.458038}}/>
     </GoogleMap> 
     </div> 
}

export default MapView


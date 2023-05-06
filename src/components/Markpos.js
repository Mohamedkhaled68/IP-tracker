import React, {useEffect} from "react";
import { Marker, useMap } from 'react-leaflet'

export default function Markpos (props) {
    const map = useMap()
    const position = [props.address.lat, props.address.lon]
    useEffect(()=> {
        map.flyTo(position, 9, {
            animate : true
        })
    },[map, position])
    return (
        <Marker
            position={position}
        >
        </Marker>
    )
} 


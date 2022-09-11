import React, {useState, useRef, useContext, useEffect} from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useMapEvents } from 'react-leaflet'
import { Typography, Box } from '@mui/material'
import { Context } from '../../context/context'

const here = {
  apiKey: 'kYUhWWiAYN0QtFCkwrU4mQylTKFDr4IsvsQZdIGhnVs',
}

const style = 'hybrid.day'

const MapEvents = ({ setDispatchLocation }) => {
  const map = useMapEvents({
      click(e) {
          const { lat, lng } = e.latlng
          setDispatchLocation([lat, lng])
      },
  });
  return null;
};


const places = [
  {id: 1, place: 'Lagunillas', coords: [8.504601966081314, -71.38864484974029]},
  {id: 2, place: 'Mérida', coords: [8.597535752048781, -71.14431677395429]},
  {id: 3, place: 'Ejido', coords: [8.546816432224514, -71.24278337953415]},
]

export const Map = () => {
  const { setClientInfo, clientInfo } = useContext(Context)
  const [map, setMap] = useState(null)
  const [dispatchLocation, setDispatchLocation] = useState([])
  const [selectedPlace, setSelectedPlace] = useState(places[0])

  useEffect(()=>{
    setClientInfo(prev =>({
      ...prev,
      coords: dispatchLocation
    }))
  }, [dispatchLocation])

  console.log(clientInfo)

  const handleFlyTo = (coords) => {
    console.log('fly')
    map.setView(coords, 17)
  }


  return (
    <>
      <Box>
        {places.map(place => (
          <Typography onClick={()=>handleFlyTo(place.coords)}>
            {place.place}
          </Typography>
        ))}
      </Box>
      <MapContainer center={selectedPlace.coords} zoom={17} scrollWheelZoom={false} ref={setMap} >
        <TileLayer attribution='&copy; HERE 2019' url={`https://2.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/${style}/{z}/{x}/{y}/512/png8?apiKey=${here.apiKey}`} />
        <Marker position={selectedPlace.coords}></Marker>
        <MapEvents setDispatchLocation={setDispatchLocation} />
      </MapContainer>
    </>
  )
}

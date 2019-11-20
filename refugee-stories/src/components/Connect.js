import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Connect =() => {
    const [locations, setLocations] = useState([]);
    const [userLocation, setUserLocation] = useState({
        lat: 40.74917,
        long: -73.98529
    })

    useEffect(() => {
        axios.get(`https://places.cit.api.here.com/places/v1/autosuggest?at=${userLocation.lat},${userLocation.long}&q=refugee&app_id=AESJkfMP7fxkN811LrCT&app_code=-9aSLPfcddWy0l3U6hyknQ`)
        .then(res => {
            console.log(res.data.results);
            setLocations(res.data.results);
        })
        .catch(err => console.log(err))
    }, [userLocation])

    const geolocate = () => {
        if (window.navigator && window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
          } 
    }

    function onGeolocateSuccess(coordinates) {
        const { latitude, longitude } = coordinates.coords;
        console.log('Found coordinates: ', latitude, longitude);
        setUserLocation({lat: latitude, long: longitude})
      }
      
    function onGeolocateError(error) {
        console.warn(error.code, error.message);
    
        if (error.code === 1) {
            // they said no
        } else if (error.code === 2) {
            // position unavailable
        } else if (error.code === 3) {
            // timeout
        }
    }

    return (
        <div>
            <h1>Refugee Aid Organizations</h1>
            <button onClick={geolocate}>Find Places Near Me</button>
            {locations.map(location => { 
                return (
                <div key={`${location.title}${location.type}`}>
                    <h2>{location.title}</h2>
                    {(!location.vicinity)? null: 
                    <p>{location.vicinity.replace(/<br\s*[/]?>/gi, "  |  ")}</p>
                    }
                </div>
                )
            })}
        </div>
    )
}
export default Connect;
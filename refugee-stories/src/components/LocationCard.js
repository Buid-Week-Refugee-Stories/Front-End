import React, {useState, useEffect} from 'react';
import axios from 'axios';

const LocationCard = ( { location }) => {
    const [map, setMap] = useState('');
    const [latlong, setLatLong] = useState(location.position) //[40.74917, -73.98529]
    console.log(latlong);
    useEffect(() => {
        
        axios.get(`https://image.maps.api.here.com/mia/1.6/mapview?app_id=AESJkfMP7fxkN811LrCT&app_code=-9aSLPfcddWy0l3U6hyknQ&c=${latlong[0]},${latlong[1]}`)
        .then(res => {
            console.log(res.config.url);
            setMap(res.config.url);
        })
        .catch(err => console.log(err))
    }, [latlong]);
    return (        
            <div className='storyContainer' >
                <h2>{location.title}</h2>
                {(!location.vicinity)? null: 
                <p style={{textAlign: 'center'}}>{location.vicinity.replace(/<br\s*[/]?>/gi, "  |  ")}</p>
                }
                <img src={map} alt='map' />
            </div>
    )
}

export default LocationCard;
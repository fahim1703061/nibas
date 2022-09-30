import React, {useState} from 'react'
import axios from 'axios'
import GoogleMap from '../../components/GoogleMap/GoogleMap';


function Test({location}) {
    const [lat,setLat] = useState(24.006355);
    const [lon, setLon]= useState(89.249298);
    var coordinate = {
      
      lat: lat,
      lon: lon
    }
    
    async function geocode(){
      var location = 'Dhaka,Bangladesh'
      const { data } = await axios.get('https://api.geoapify.com/v1/geocode/search',{ 
          params:{
              text:location,
              apiKey: "72f1a85fad8d44bebf151a40952869b8",
              format:'json'
          }
       })
       console.log(data);
       console.log(data.results[0].lon);
      //  this.setState((state, props) => ({
          
      //   }));
      //   this.add(data.results[0].lat, data.results[0].lon)
      //   this.setState({
      //     lat: data.results[0].lat,
      //     lng:  data.results[0].lon
      //   })
        
       setLat(data.results[0].lat)
       setLon(data.results[0].lon)
      //  this.state({})
      // code = data;
      // console.log(this.state.lng);
      }
      geocode();

  return (
    <div>
      <GoogleMap location={coordinate} />
    </div>
  )
}

export default Test
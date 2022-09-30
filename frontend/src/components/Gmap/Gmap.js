//-------------------using react-------------------------


import React, {useState} from 'react'
import axios from 'axios'
import GoogleMap from '../../components/GoogleMap/GoogleMap';


function Gmap({address}) {
    const [lat,setLat] = useState(24.006355);
    const [lon, setLon]= useState(89.249298);
    var coordinate = {
      
      lat: lat,
      lon: lon
    }
    
    async function geocode(){
      var location = address ? address :'Dhaka,Bangladesh'
    //   var location = 'Dhaka,Bangladesh'
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

export default Gmap





//------------using i frame--------------------------------------


// import React from 'react'

// function Gmap({location}) {
//   return (
//     <div>
//       Test
//       {/* <div style={{width: "100%"}}>
//         <iframe width="100%" height="600" frameborder="0" scrolling="no", marginheight="0", marginwidth="0", src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
//           <a href="https://www.maps.ie/distance-area-calculator.html">
//             measure area map
//           </a>
       
  
//       </div> */}

//     <div className="google-map-code">
//     {/* <iframe title='map' width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pabna&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}></iframe> */}
//         </div>
//         <div style={{width: "100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
//     </div>

//   )
// }

// export default Gmap
import React, {Component, useState, useEffect} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios'

export class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        //   lat: 24.006355,
        //   lng: 89.249298
        }
    }
    // add=()=> {

    //     geocode();
    //     // var code = {}
    //     async function geocode(){
    //         var location = 'Dhaka,Bangladesh'
    //         const { data } = await axios.get('https://api.geoapify.com/v1/geocode/search',{ 
    //             params:{
    //                 text:location,
    //                 apiKey: "72f1a85fad8d44bebf151a40952869b8",
    //                 format:'json'
    //             }
    //          })
    //          console.log(data);
    //          console.log(data.results[0].lon);
    //         //  this.setState((state, props) => ({
                
    //         //   }));
    //         //   this.add(data.results[0].lat, data.results[0].lon)
    //         //   this.setState({
    //         //     lat: data.results[0].lat,
    //         //     lng:  data.results[0].lon
    //         //   })
              
    //         //  this.setState({lat: data.results[0].lat})
    //         //  this.setState({lng: data.results[0].lon})
    //         //  this.state({})
    //         // code = data;
    //         console.log(this.state.lng);
    //     }
        
    //   }
    render() {
        
        // geocode();
        // var code = {}
        // async function geocode(){
        //     var location = 'Dhaka,Bangladesh'
        //     const { data } = await axios.get('https://api.geoapify.com/v1/geocode/search',{ 
        //         params:{
        //             text:location,
        //             apiKey: "72f1a85fad8d44bebf151a40952869b8",
        //             format:'json'
        //         }
        //      })
        //      console.log(data);
        //      console.log(data.results[0].lon);
        //     //  this.setState((state, props) => ({
                
        //     //   }));
        //       this.add(data.results[0].lat, data.results[0].lon)
              
        //     //  this.setState({lat: data.results[0].lat})
        //     //  this.setState({lng: data.results[0].lon})
        //     //  this.state({})
        //     code = data;
        //     console.log(this.state.lng);
        // }
        // console.log(code);
      return (
        <div >
            {console.log(this.props.location.lat)}
        <Map google={this.props.google}
            initialCenter={{
                lat: this.props.location.lat,
                lng: this.props.location.lon
            }}
            zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Rajshahi'} />
   
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{'pabna'}</h1>
              </div>
          </InfoWindow> */}
        </Map>
        </div>
      );
    }
  }
   

export default GoogleApiWrapper({
    apiKey: "AIzaSyDPMVGEx-1McVbigaCKKQhU70GXmiePj8s"
  })(GoogleMap)
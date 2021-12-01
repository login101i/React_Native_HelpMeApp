// import camelize from 'camelize'


import {locations} from "./Location.Mock"
import {host,isMock} from './../../utils/env'

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const locationTransform =(resolve)=>{
    const formattedResponse=resolve
    const {geometry={}}=formattedResponse.results[0]
    const {lat, lng}=geometry.location
    

    return {lat, lng, viewport:geometry.viewport}


}
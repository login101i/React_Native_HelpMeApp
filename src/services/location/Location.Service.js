// import camelize from 'camelize'


import {locations} from "./Location.Mock"

export const locationRequest=(searchTerm)=>{
    return new Promise ((resolve, rejection)=>{
        const location=locations[searchTerm]
        if(!location){
            rejection("not found")
        }
        resolve(location)
    })
}

export const locationTransform =(resolve)=>{
    const formattedResponse=resolve
    const {geometry={}}=formattedResponse.results[0]
    const {lat, lng}=geometry.location
    

    return {lat, lng, viewport:geometry.viewport}


}
const {geocodeRequest} = require('./geocode')
const {placesRequest}=require('./places')

const {location:locationMock}=require("./geocode.Mock")
const url=require("url")

module.export.geocodeRequest=(request, response)=>{
    const {mock, city}=url.parse(request.url, true).query
    if(mock==="true"){
        const locationMock=locationMock[city.toLowerCase()]
        return response.json(locationMock)
    }

     client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};

}


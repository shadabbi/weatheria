const key = 'a2IKNAavXThho291YHGlNyrqL9Rljj1Q';


const getWeather = async (id)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await axios.get(base + query);
   
    return response.data[0]
}


const getCity = async (city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await axios.get(base + query);
   
    return response.data[0];
}



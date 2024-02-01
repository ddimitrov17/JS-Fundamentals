function towns(array) {
    for (let currentCity of array) {
        let [cityName,latitude,longitude]=currentCity.split(` | `)
        let cityObject={
            town: cityName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(cityObject);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])
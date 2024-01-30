function city(cityObject) {
    for (let key of Object.keys(cityObject)) {
        console.log(`${key} -> ${cityObject[key]}`);
    }
}

city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })
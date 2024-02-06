function garage(input) {
    let garages={};
    for (i=0;i<input.length;i++) {
        let garageNumber=input[i].split(` - `)[0];
        let carInfo=input[i].split(` - `)[1];
        if (garages.hasOwnProperty(garageNumber)) {
                garages[garageNumber].push(carInfo);
        } else {
            garages[garageNumber]=[carInfo];
        }
    }
    for (let [currentGarage,carsInGarage] of Object.entries(garages)) {
        console.log(`Garage № ${currentGarage}`);
        for (let currentCar of carsInGarage) {
            currentCar=currentCar.split(`: `).join(` - `);
            console.log(`--- ${currentCar}`);
        }
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red,manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fueltype: diesel, manufacture: Fiat'])
garage(['1 - color: green, fuel type: petrol','1 - color: dark red, manufacture: WV','2 - fuel type: diesel',`3 - color: dark blue, fuel type: petrol`])
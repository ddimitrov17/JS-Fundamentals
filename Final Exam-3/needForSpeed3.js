function needForSpeed3(input) {
    let numberOfCars=Number(input.shift());
    let cars={}; // cars    [0]=mileage,[1]=fuel
    for (i=0;i<numberOfCars;i++) {
        let tokens=input[i].split(`|`);
        cars[tokens[0]]=[Number(tokens[1]),Number(tokens[2])];
    }
    input.splice(0,numberOfCars);
    let command=input.shift();
    while (command!=`Stop`) {
        let tokens=command.split(` : `);
        if (tokens[0]==`Drive`) {
            let currentCar=tokens[1];
            if (cars[currentCar][1]>=Number(tokens[3])) {
                cars[currentCar][0]+=Number(tokens[2]);
                cars[currentCar][1]-=Number(tokens[3]);
                console.log(`${currentCar} driven for ${tokens[2]} kilometers. ${tokens[3]} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
            if (cars[currentCar][0]>=100000) {
                console.log(`Time to sell the ${currentCar}!`);
                delete cars[currentCar];
            }
        } else if (tokens[0]==`Refuel`) {
            let currentCar=tokens[1];
            let toRefuel=Number(tokens[2]);
            let fuelBefore=cars[currentCar][1];
            cars[currentCar][1]+=Math.min(75-cars[currentCar][1],toRefuel);
            console.log(`${currentCar} refueled with ${Math.min(75-fuelBefore,toRefuel)} liters`);
        } else if (tokens[0]==`Revert`) {
            let currentCar=tokens[1];
            let toDecrease=Number(tokens[2]);
            if (cars[currentCar][0]-toDecrease>=10000) {
                cars[currentCar][0]-=toDecrease;
                console.log(`${currentCar} mileage decreased by ${toDecrease} kilometers`);
            } else {
                cars[currentCar][0]=10000;
            }
        }
        command=input.shift();
    }
    for (let currentCar of Object.entries(cars)) {
        console.log(`${currentCar[0]} -> Mileage: ${currentCar[1][0]} kms, Fuel in the tank: ${currentCar[1][1]} lt.`);
    }
}

needForSpeed3([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])
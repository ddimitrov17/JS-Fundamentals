function computerStore(array) {
    let sum=0;
    let i=0;
    while(array[i]!=`special` && array[i]!=`regular`) {
        if (Number(array[i])>0) {
            sum+=Number(array[i]);
        } else {
            console.log(`Invalid price!`);
        }
        i++;
    }
    let taxes=0.2*sum;
    if (sum>0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        if (array[array.length-1]==`regular`) {
            sum=sum+taxes;
        } else {
            sum=(sum+taxes)*0.9;
        }
        console.log(`Total price: ${sum.toFixed(2)}$`);
    } else {
        console.log(`Invalid order!`);
    }
}

computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
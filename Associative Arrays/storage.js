function storage(input) {
    let storageObject={};
    for (let currentProduct of input) {
        let [product,quantity]=currentProduct.split(` `);
        quantity=Number(quantity);
        if (storageObject.hasOwnProperty(product)) {
           storageObject[product]+=quantity;
        } else {
            storageObject[product]=quantity;   
        }
    }
    for (let [product,qty] of Object.entries(storageObject)) {
        console.log(`${product} -> ${qty}`);
    }
}

storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])
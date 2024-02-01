function storeProvision(currentStock,orderedStock) {
    let products={};
    for (i=0;i<currentStock.length;i+=2) {
        let productName=currentStock[i];
        let quantity=Number(currentStock[i+1]);
        products[productName]=quantity;
    }
    for (j=0;j<orderedStock.length;j+=2) {
        let productName=orderedStock[j];
        let quantity=Number(orderedStock[j+1]);
        if (productName in products) {
            products[productName]+=quantity;
        } else {
            products[productName]=quantity;
        }
    }
    for (let currentEntry of Object.entries(products)) {
        console.log(currentEntry.join(` -> `));
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])
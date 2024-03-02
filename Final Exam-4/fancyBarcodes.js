function fancyBarcodes(input) {
    let countOfBarcodes=Number(input.shift());
    let pattern=/@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    for (let currentBarcode of input) {
        let match=currentBarcode.match(pattern);
        if (match) {
            let productGroup=``;
            for (let currentChar of match.join(``)) {
                if (currentChar.charCodeAt()>=48 && currentChar.charCodeAt()<=57) {
                    productGroup+=currentChar;
                }
            }
            if (productGroup.length==0) {
                productGroup=`00`;
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
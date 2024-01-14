function reverseInPlace(arrStrings) {
    let a=``;
    for (i=0;i<arrStrings.length/2;i++) {
        a=arrStrings[i];
        arrStrings[i]=arrStrings[arrStrings.length-1-i];
        arrStrings[arrStrings.length-1-i]=a;
    }
    arrStrings=arrStrings.join(` `);
    console.log(arrStrings);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
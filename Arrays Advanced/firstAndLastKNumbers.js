function firstAndLastKNumbers(array) {
    let k=Number(array[0]);
    array.shift();
        let firstCut=array.slice(0,k);
        let lastCut=array.slice(array.length-k,array.length)
        console.log(firstCut.join(` `));
        console.log(lastCut.join(` `));
}

firstAndLastKNumbers([2,

    7, 8, 9])
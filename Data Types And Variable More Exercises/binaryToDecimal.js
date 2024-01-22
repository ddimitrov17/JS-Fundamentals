function binaryToDecimal(binary) {
    binary=String(binary);
    let sum=0;
    let power=0;
    for (let i=binary.length-1;i>=0;i--) {
        let current=Number(binary[i])*Math.pow(2,power);
        power++;
        sum+=current;
    }
    console.log(sum);
}

binaryToDecimal(`00001001`)
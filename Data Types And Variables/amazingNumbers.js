function amazingNumbers(num) {
    let numToString=String(num)
    let sum=0;
    for (i=0;i<numToString.length;i++) {
        sum+=Number(numToString[i]);
    }
    let isTrue=sum.toString().includes("9");
    //console.log(isTrue);
    if (isTrue==true) {
        isTrue=`True`;
    } else {
        isTrue=`False`;
    }
    console.log(`${num} Amazing? ${isTrue}`);
}

amazingNumbers(1233)
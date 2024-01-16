function bombNumbers(array,bombInfo) {
    let bomb=bombInfo[0];
    let power=Number(bombInfo[1]);
    let sum=0;
    while (array.includes(bomb)) {
        let idx=array.indexOf(bomb);
        array.splice(Math.max(0,idx-power),power*2+1,0);
    }
    for (let num of array) {
        sum+=Number(num);
    }
    console.log(sum);
}

bombNumbers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[2, 1])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
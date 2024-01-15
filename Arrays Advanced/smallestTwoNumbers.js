function smallestTwoNumbers(array) {
    let sortedInAscending=array.sort((a,b) => a-b);
    let print=sortedInAscending.slice(0,2);
    console.log(print.join(` `));
}

smallestTwoNumbers([30, 15, 50, 5])
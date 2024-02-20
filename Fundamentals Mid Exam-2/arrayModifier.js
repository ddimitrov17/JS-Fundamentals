function arrayModifier(array) {
    let myArray=array.shift().split(` `).map(Number);
    let i=0;
    while(array[i]!==`end`) {
        let command=array[i].split(` `);
        if (command[0]==`swap`) {
            let idx1=Number(command[1]);
            let idx2=Number(command[2]);
            swap(idx1,idx2);
        } else if (command[0]==`multiply`) {
            let idx1=Number(command[1]);
            let idx2=Number(command[2]);
            multiply(idx1,idx2);
        } else {
            myArray=myArray.map(((a) => a=a-1)); // decrease
        }
        i++;
    }
    function swap(a,b) {
        let p=myArray[a];
        myArray[a]=myArray[b];
        myArray[b]=p;
    }
    function multiply(a,b) {
        myArray[a]=myArray[a]*myArray[b];
    }
    console.log(myArray.join(`, `));
}

arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
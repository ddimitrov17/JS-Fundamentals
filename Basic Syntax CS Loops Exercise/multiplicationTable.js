function multiplicationTable(n) {
    for(let a=1;a<=10;a++) {
        let sum=a*n;
        console.log(`${n} X ${a} = ${sum}`);
    }
}

multiplicationTable(5)
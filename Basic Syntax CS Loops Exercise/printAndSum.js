function printAndSum(m,n) {
    let sum=0;
    let buff="";
    for (let i=m;i<=n;i++) {
        buff+=i+" ";
        sum+=i;
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10)
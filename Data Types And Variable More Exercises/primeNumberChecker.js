function primeNumberChecker(num) {
    let isTrue=false;
    for (let i=2;i<num;i++) {
        if (num%i==0) {
            console.log(`false`);
            return;
        } else {
            isTrue=true;
        }
    }
    if (isTrue) {
        console.log(`true`);
    }
}

primeNumberChecker(7)
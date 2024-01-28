function factorialDivision(num1,num2) {
    let first=Factorial(num1);
    let second=Factorial(num2);
    console.log((first/second).toFixed(2));
    function Factorial(n) {
        let sum=1;
        for (i=n;i>1;i--) {
            sum*=i;
        }
        return sum;
    }
}

factorialDivision(6,2)
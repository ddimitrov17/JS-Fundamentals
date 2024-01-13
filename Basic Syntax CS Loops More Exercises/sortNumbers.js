function sortNumbers(num1,num2,num3) {
    let a=Math.max(num1,num2,num3);
    let b=Math.min(num1,num2,num3);
    if (num1<a && num1>b) {
        console.log(a);
        console.log(num1);
        console.log(b);
    } else if (num2<a && num2>b) {
        console.log(a);
        console.log(num2);
        console.log(b);
    } else {
        console.log(a);
        console.log(num3);
        console.log(b);
    }
}
sortNumbers(2,3,1)
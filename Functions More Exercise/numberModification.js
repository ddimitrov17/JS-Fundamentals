function numberModification(num) {
    let sum=0;
    let avg=0;
    num=num.toString();
    for (i=0;i<num.length;i++) {
        sum+=Number(num[i]);
    }
    avg=sum/num.length;
    while (avg<5) {
        num+=`9`;
        sum+=9;
        avg=sum/num.length;
    }
    console.log(num);
}

numberModification(101)
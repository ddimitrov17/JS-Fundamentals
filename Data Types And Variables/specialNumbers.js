function specialNumbers(num) {
    for (let i=1;i<=num;i++) {
        let sum=0;
        let p=i.toString();
        for (let j=0;j<p.length;j++) {
            sum+=Number(p[j]);
        }
        let isTrue=`False`;
        if (sum==5 || sum==7 || sum==11) {
            isTrue=`True`;
        }
        console.log(`${i} -> ${isTrue}`);
    }
}

specialNumbers(15)
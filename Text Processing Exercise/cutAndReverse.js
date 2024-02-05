function cutAndReverse(input) {
    let leftCut=input.slice(0,input.length/2);
    let rightCut=input.slice(input.length/2);
    let newLeft=``;
    let newRight=``;
    for (i=leftCut.length-1;i>=0;i--) {
        newLeft+=leftCut[i];
    }
    for (j=rightCut.length-1;j>=0;j--) {
        newRight+=rightCut[j];
    }
    console.log(newLeft);
    console.log(newRight);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
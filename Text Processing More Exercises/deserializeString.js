function deserializeString(input) {
    let printArray=[];
    for (i=0;i<input.length-1;i++) {
        let letter=input[i].split(`:`)[0];
        let indeces=input[i].split(`:`)[1].split(`/`);
        for (let currentIndex of indeces) {
            printArray[Number(currentIndex)]=letter;
        }
    }
    console.log(printArray.join(``));
}

deserializeString(['a:0/2/4/6','b:1/3/5','end'])
deserializeString(['a:0/3/5/11',

'v:1/4',

'j:2',

'm:6/9/15',

's:7/13',

'd:8/14',

'c:10',

'l:12',

'end'])
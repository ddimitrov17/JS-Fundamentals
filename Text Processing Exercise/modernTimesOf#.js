function modernTimesOfHash(str) {
    let strArray=str.split(` `);
    let hashes=strArray.filter(word => word.startsWith(`#`) && word.length>1);
    for (let current of hashes) {
        current=current.slice(1);
        let isValid=true;
        for (let char of current) {
            if (!/[A-Za-z]/.test(char)) {
                isValid=false;
                break;
            }
        }
        if (isValid) {
            console.log(current);
        }
    }
}

modernTimesOfHash('Nowadays everyone uses # to tag a #special word in #socialMedia')
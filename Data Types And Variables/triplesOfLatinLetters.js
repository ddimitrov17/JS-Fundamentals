function triplesOfLatinLetters(num) {
    for (let i=0;i<num;i++) {
        let buff="";
            for (let j=0;j<num;j++) {
                for (let k=0;k<num;k++) {
                    buff=String.fromCharCode(97+i)+String.fromCharCode(97+j)+String.fromCharCode(97+k);
                    console.log(buff);
            }
        }
    }
}

triplesOfLatinLetters(3)
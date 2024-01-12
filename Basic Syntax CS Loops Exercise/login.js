function login(input) {
    let username=input[0];
    let correctPass="";
    let wrongAttempts=0;
    for (let a=username.length-1;a>=0;a--) {
        correctPass+=username[a]+"";
    }
    //console.log(correctPass);
    let guess=input[1];
    let index=2;
    while (guess!==correctPass) {
        wrongAttempts++;
        if (wrongAttempts>=4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);
        guess=input[index];
        index++;
    }
    console.log(`User ${username} logged in.`);
}

login(['Acer','login','go','let me in','recA'])
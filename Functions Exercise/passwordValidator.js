function passwordValidator(pass) {
    let isValidLength=passwordLength(pass);
    let isValidSymbols=passwordSymbols(pass);
    let isPasswordMinDigits=passwordMinDigits(pass);
    if (isValidLength && isValidSymbols && isPasswordMinDigits) {
        console.log(`Password is valid`);
    }
    function passwordLength(pass) {
        if (pass.length>=6 && pass.length<=10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }
    function passwordSymbols(pass) {
        for (let currentSymbol of pass) {
            let a=currentSymbol.charCodeAt();
            if (!(a>=48 && a<=57 || a>=65 && a<=90 || a>=97 && a<=122)) {
                console.log(`Password must consist only of letters and digits`);
                return false;
            }
        }
        return true;
    }
    function passwordMinDigits(pass) {
        let counter=0;
        for (let currentSymbol of pass) {
            let a=currentSymbol.charCodeAt();
            if (a>=48 && a<=57) {
                counter++;
            }
        }
        if (counter<2) {
            console.log(`Password must have at least 2 digits`);
            return false;
        }
        return true;
    }
}

passwordValidator('MyPas3')
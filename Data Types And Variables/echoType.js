function echoType (parameter) {
    let a=typeof(parameter);
    if (a==`string` || a==`number`) {
        console.log(a);
        console.log(parameter);
    } else if (a==`object`) {
        console.log(a);
        console.log(`Parameter is not suitable for printing`);
    } else {
        console.log(`Parameter is not suitable for printing`);
    }
}

echoType(null)
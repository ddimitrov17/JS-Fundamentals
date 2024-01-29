function countdown (x) {
    console.log(x);

    if (x>0) {
        countdown(x-1);
    }
}

countdown(10)
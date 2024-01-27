function orders(product,count) {
    let sum=0;
    if (product==`coffee`) {
        sum=1.5*count;
    } else if (product==`water`) {
        sum=1*count;
    } else if (product==`coke`) {
        sum=1.4*count;
    } else {
        sum=2*count;
    }
    console.log(sum.toFixed(2));
}

orders("coffee", 2)
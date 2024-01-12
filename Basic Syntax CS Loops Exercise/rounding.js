    function rounding(n,p) {
    if (p>15) {
        p=15;
    }
    n=n.toFixed(p);
    console.log(parseFloat(n));
}

rounding(5.5,3)
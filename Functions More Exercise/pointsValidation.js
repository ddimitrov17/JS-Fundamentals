function pointsValidation(input) {
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];
    distance(x1,y1,0,0);
    distance(x2,y2,0,0);
    distance(x1,y1,x2,y2);
    function distance(a,b,c,d) {
        let distance=Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2));
    if (distance%1==0) {
        console.log(`{${a}, ${b}} to {${c}, ${d}} is valid`);
    } else {
        console.log(`{${a}, ${b}} to {${c}, ${d}} is invalid`);
    }
    }
}

pointsValidation([3, 0, 0, 4])
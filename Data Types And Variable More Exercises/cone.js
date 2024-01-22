function cone (radius,height) {
    let volume=(Math.PI*height*Math.pow(radius,2))/3;
    let l=Math.sqrt(Math.pow(height,2)+Math.pow(radius,2));
    let surface=Math.PI*radius*(radius+l);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surface.toFixed(4)}`);
}

cone(3,

    5)
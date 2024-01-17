function arrayRotation(array,num) {
    for (i=0;i<num;i++) {
        let a=array.shift();
        array.push(a);
    }
    array=array.join(` `);
    console.log(array);
}

arrayRotation([51, 47, 32, 61, 21], 2)
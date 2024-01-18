function rotateArray(array) {
    let rotations=array[array.length-1];
    array.pop();
    for (i=1;i<=rotations;i++) {
        array.push(array[0]);
        array.shift();
    }
    console.log(array.join(` `));
} 

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut','Apple', '17'])
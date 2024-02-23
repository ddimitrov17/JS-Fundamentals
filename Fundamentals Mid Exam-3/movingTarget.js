function movingTarget(array) {
    let sequence=array.shift().split(` `).map(Number);
    let i=0;
    while (array[i]!=`End`) {
        let command=array.shift().split(` `);
        if (command[0]==`Shoot`) {
            shoot(Number(command[1]),Number(command[2]));
        } else if (command[0]==`Strike`) {
            strike(Number(command[1]),Number(command[2]));
        } else {
            add(Number(command[1]),Number(command[2]));
        }
    }
    function shoot(index,power) {
        if (sequence[index]!=undefined) {
            sequence[index]-=power;
            if (sequence[index]<=0) {
                sequence.splice(index,1);
            }
        } else {
            return;
        }
    }
    function strike(index,radius) {
        if (index-radius>=0 && index+radius<sequence[sequence.length-1]) {
            sequence.splice(index-radius,radius*2+1);
        } else {
            console.log(`Strike missed!`);
            return;
        }
    }
    function add(index,value) {
        if (index>=0 && index<sequence.length) {
            sequence.splice(index,0,`${value}`)
        } else {
            console.log(`Invalid placement!`);
        }
    }
    console.log(sequence.join(`|`));
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
// movingTarget(["1 2 3 4 5",
// "Strike 0 1",
// "End"])
movingTarget(["52 74 23 44 96 110",
`Strike 2 2`,`End`])
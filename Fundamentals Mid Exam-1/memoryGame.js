function memoryGame(array) {
    let gameArray=array[0].split(` `);
    let i=1;
    while (array[i]!==`end` && array[0]!==`end`) {
        let guess=array[i].split(` `).map(Number);
        if (guess[0]<0 || guess[1]<0 || guess[0] >= gameArray.length || guess[1] >= gameArray.length || guess[0]==guess[1]) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let midIdx=Math.floor(gameArray.length/2);
            gameArray.splice(midIdx,0,`-${i}a`,`-${i}a`);
        } else {
            if (gameArray[guess[0]]==gameArray[guess[1]]) {
                console.log(`Congrats! You have found matching elements - ${gameArray[guess[0]]}!`);
                gameArray=gameArray.filter((el) => el!==gameArray[guess[0]] && gameArray[guess[1]]);
            } else {
                console.log(`Try again!`);
            }
        }
        if (gameArray.length==0) {
            console.log(`You have won in ${i} turns!`);
            return;
        }
        i++;
    }
        console.log(`Sorry you lose :(`);
        console.log(gameArray.join(` `));
}
// memoryGame( [
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 0",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"
//     ])
// memoryGame([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ])
memoryGame(["end"])
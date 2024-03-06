function theAngryCat(priceRatingsList,position,itemType) {
    let leftSum=0;
    let rightSum=0;
    for (i=position-1;i>=0;i--) { // LEFT SUM
        if (itemType==`cheap`) {
            if (priceRatingsList[i]<priceRatingsList[position]) {
                leftSum+=priceRatingsList[i];
            }
        } else if (itemType==`expensive`) {
            if (priceRatingsList[i]>=priceRatingsList[position]) {
                leftSum+=priceRatingsList[i];
            }
        }
    }
    for (j=position+1;j<priceRatingsList.length;j++) { // RIGHT SUM
        if (itemType==`cheap`) {
            if (priceRatingsList[j]<priceRatingsList[position]) {
                rightSum+=priceRatingsList[j];
            }
        } else if (itemType==`expensive`) {
            if (priceRatingsList[j]>=priceRatingsList[position]) {
                rightSum+=priceRatingsList[j];
            }
        }
    }
    if (leftSum>=rightSum) { // Comparing LEFT to RIGHT
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }
}

// theAngryCat([1, 5, 1],
//     1,
//     "cheap")
theAngryCat([5, 10, 12, 5, 4, 20],
    3,
    "cheap")
function softUniReception(array) {
    let firstEmp=Number(array[0]);
    let secondEmp=Number(array[1]);
    let thirdEmp=Number(array[2]);
    let students=Number(array[3]);
    let hoursCount=0;
    while (students>0) {
        students-=firstEmp+secondEmp+thirdEmp;
        hoursCount++;
        if (hoursCount%4==0) {
            hoursCount++;
        }
    }
    console.log(`Time needed: ${hoursCount}h.`);
}

// softUniReception(['5','6','4','20'])
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])
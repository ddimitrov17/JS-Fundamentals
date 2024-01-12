function vacation(count,type,day) {
    let sum=0;
    let temp=0;
    if (type===`Students`) {
        switch (day) {
            case "Friday": sum=count*8.45; break;
            case "Saturday": sum=count*9.8; break;
            case "Sunday": sum=count*10.46; break;
        }
        if (count>=30) {
            sum*=0.85; //discount
        }
    } else if (type===`Business`) {
        switch (day) {
            case "Friday": { 
                sum=count*10.9; 
                type=10.9;
                break;
            } 
            case "Saturday": { 
                sum=count*15.6; 
                type=15.6;
                break;
            } 
            case "Sunday": { 
                sum=count*16; 
                type=16;
                break;
            }  //115*20; 2300 ; 2100
        }
        if (count>=100) {
            sum=sum-10*type;
        }
    } else if (type===`Regular`) {
        switch (day) {
            case "Friday": sum=count*15; break;
            case "Saturday": sum=count*20; break;
            case "Sunday": sum=count*22.5; break;
        }
        if (count>=10 && count<=20) {
            sum*=0.95; //discount
        }
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(30,`Students`,`Sunday`)
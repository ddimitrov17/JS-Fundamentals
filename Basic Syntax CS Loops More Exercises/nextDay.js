function nextDay(year,month,day) {
    let today = new Date(year,month-1,day);

    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1); 
    let dd = nextDay.getDate();
    let mm = nextDay.getMonth()+1;
    let yyyy = nextDay.getFullYear();
    console.log(`${yyyy}-${mm}-${dd}`);
}

nextDay(2016, 9, 30)
function meetings(input) {
    let schedule={};
    for (let entry of input) {
        let [day,person]=entry.split(` `);
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day]=person;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let current of Object.entries(schedule)) {
        console.log(`${current.join(` -> `)}`);
    }
}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])
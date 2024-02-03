function companyUsers(input) {
    let employeesObject={};
    for (let currentEmployee of input) {
        let employeeList=[];
        let [company,employeeId]=currentEmployee.split(` -> `);
        employeeList.push(employeeId);
        if (employeesObject.hasOwnProperty(company)) {
            employeesObject[company].push(employeeId);
        } else {
            employeesObject[company]=employeeList;
        }
    }
    let sorted=Object.entries(employeesObject)
    .sort((a,b) => a[0].localeCompare(b[0]));
    for (let [companyName,employees] of sorted) {
        console.log(companyName);
        let uniqueIds=new Set(employees)
        for (let cur of uniqueIds) {
            console.log(`-- ${cur}`);
        }
    }
}

// companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])

const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  const employees = [];
  let addAnotherEmployee = true;

  // prompt for names //

  while (addAnotherEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salary = parseFloat(prompt("Enter employee's salary:"));

    employees.push({ firstName, lastName, salary });

    const continueInput = confirm("Do you want to add another employee?");
    if (!continueInput) {
      addAnotherEmployee = false;
    }
  }

  return employees;
}

// list employees //

const displayAverageSalary = function(employeesArray) {

}


const getRandomEmployee = function(employeesArray) {
}


const sortEmployeesByLastName = function(employeesArray) {
  employeesArray.sort((a, b) => {
    return a.lastName.localeCompare(b.lastName);
  });
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);


  sortEmployeesByLastName(employees);

  displayEmployees(employees);
}

// button to add new employees//
addEmployeesBtn.addEventListener('click', trackEmployeeData);


const displayEmployees = function(employeesArray) {

  const employeeTable = document.querySelector('#employee-table');


  employeeTable.innerHTML = '';


  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");

    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

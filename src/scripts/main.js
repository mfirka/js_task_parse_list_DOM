'use strict';

const employeeList = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortListSalary(list) {
  const sortedEmployees = Array.from(list.children).sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  sortedEmployees.forEach((employee) => list.appendChild(employee));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortListSalary(employeeList);

const employeeArray = getEmployees(employeeList);

employeeArray.innerHTML = '';

sortListSalary.forEach((item) => {
  employeeList.appendChild(item);
});
